import { v4 as uuidv4 } from 'uuid';

import { AppError } from "../../errors";
import { User } from "../models";

class RegisterController {
  async store(req, res) {
    const {
      body: { name, email, password }
    } = req;

    const messages = {
      success: "Usuário cadastrado com sucesso.",
      error: "Ocorreu um erro. Por favor, tente novamente mais tarde.",
      userAlreadyExists: "Usuário já cadastrado, faça login para acessar o sistema."
    }

    let userAlreadyExists;
    let registedUserData;

    try {
      userAlreadyExists = await User.findOne({ where: { email } });
    } catch (error) {
      throw new AppError(messages.error);
    }

    if (userAlreadyExists) {
      throw new AppError(messages.userAlreadyExists);
    }

    try {
      registedUserData = await User.create({ id: uuidv4(), name, email, password });
    } catch (error) {
      throw new AppError(messages.error);
    }

    const data = {
      id: registedUserData.id,
      name: registedUserData.name,
      email: registedUserData.email
    }

    res.json({ message: messages.success, data });
  }
}

export default new RegisterController();
