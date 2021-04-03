import { AppError } from "../../errors";
import { User } from "../models";

class UserController {
  async destroy(req, res) {
    const {
      params: { id }
    } = req;

    const messages = {
      success: "Usuário deletado com sucesso.",
      error: "Ocorreu um erro. Por favor, tente novamente mais tarde.",
      userNotFound: 'Usuário não encontrado. Verifique os dados e tente novamente.'
    }

    let user;

    try {
      user = await User.findOne({ where: { id } });
    } catch (error) {
      throw new AppError(messages.error);
    }

    if (!user) {
      throw new AppError(messages.userNotFound);
    }

    try {
      await user.destroy();

      res.json({ message: messages.success });
    } catch (error) {
      throw new AppError(messages.error);
    }
  }
};

export default new UserController();
