import { AppError } from '../errors';
import { JwtHelper } from '../helpers';

const jwtMiddleware = (req, res, next) => {
  const {
    headers: { authorization },
  } = req;

  const messages = {
    error: 'Você não possui autorização para realizar essa ação.',
  };

  if (authorization) {
    const [, token] = authorization.split(' ');

    try {
      const decodedToken = JwtHelper.verify(token);

      req.userId = decodedToken.id;

      return next();
    } catch (error) {
      throw new AppError(messages.error, null, 401);
    }
  } else {
    throw new AppError(messages.error, null, 401);
  }
};

export default jwtMiddleware;
