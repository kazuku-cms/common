import { Request, Response, NextFunction } from 'express';
import {IUserContext} from '../models/user-context.interface';
import {UnauthenticatedError} from '../errors/unauthenticated.error';
import {jwtService} from '../services/jwt.service';
import {config} from '../config/common-config';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  let token = null;

  // check Authorization Header
  if (req.headers?.authorization) {
    let authHeader = req.headers.authorization;
    const authHeaderArray = authHeader.split('Bearer ');
    if (authHeaderArray?.length > 1) {
      token = authHeaderArray[1];
    }
  }

  if (token) {
    try {
      const payload = jwtService.verify(token, config.clientSecret) as IUserContext;
      req.userContext = payload;
      next();
    }
    catch (err) {
      throw new UnauthenticatedError();
    }
  }
  else {
    throw new UnauthenticatedError();
  }
}
