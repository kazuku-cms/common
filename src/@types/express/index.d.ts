import {IUserContext} from '../../../models/user-context.interface';

declare global{
  namespace Express {
    interface Request {
      userContext?: IUserContext,
    }
  }
}
