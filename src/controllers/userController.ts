import { Request, Response } from 'express';

class UserController {
  async store(req: Request, res: Response) {
    res.json({ message: 'Success' });
  }
}

export default new UserController();
