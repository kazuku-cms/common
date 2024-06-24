import { Request, Response, NextFunction } from 'express';
import {CustomError} from '../errors/custom.error';

// this is used as an error handler by express because we accept all five parameters in our handler
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error(err);
  res.status(500).send({
    //errors: [{ message: err.message }]
    errors: [{ message: 'Server Error' }],
  });
};

