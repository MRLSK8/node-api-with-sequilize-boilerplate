import { AppError } from '../errors';

const validationMiddleware = (schema) => {
  return async (req, res, next) => {
    try {
      const validatedBody = await schema.validate(req.body);
      req.body = validatedBody;
      return next();
    } catch (e) {
      const { errors } = e;
      throw new AppError(errors.join(', '));
    }
  };
};

export default validationMiddleware;
