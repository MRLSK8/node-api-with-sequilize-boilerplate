import { JwtHelper } from "../helpers";
import { AppError } from "../errors";
import { User } from "../models";

class AuthController {
  async store(req, res) {
    const {
      body: { email, password }
    } = req;

    const messages = {
      success: "Login realizado com sucesso.",
      error: "Ocorreu um erro. Por favor, tente novamente mais tarde.",
      wrongCredentials: 'E-mail ou senha incorretos. Verifique os dados e tente novamente.'
    }

    let user;

    try {
      user = await User.findOne({ where: { email } });
    } catch (error) {
      throw new AppError(messages.error);
    }

    if (!user) {
      throw new AppError(messages.wrongCredentials);
    }

    if (!user.validatePassword(password)) {
      throw new AppError(messages.wrongCredentials, null, 401);
    }

    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
      token: JwtHelper.sign({
        id: user.id,
        name: user.name,
        email: user.email,
      }),
    }

    return res.json({ message: messages.success, data });
  }
}
 
export default new AuthController();
