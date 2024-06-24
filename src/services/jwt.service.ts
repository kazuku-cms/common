import jwt from 'jsonwebtoken';

export class jwtService {
  static sign(payload: any, secret: string | undefined, options: any): string {
    return jwt.sign(payload, secret, options);
  }

  static verify(token: string, secret: string | undefined): any {
    return jwt.verify(token, secret);
  }
}
