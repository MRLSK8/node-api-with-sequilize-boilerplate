import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup
    .string("Este campo deve ser uma string.")
    .email('Email inválido. Por favor, verifique seu email e tente novamente.')
    .required('O campo de email é obrigatório.'),
  password: Yup
    .string("Este campo deve ser uma string.")
    .min(4, "A senha deve ter no mínimo 4 caracteres.")
    .max(10, "A senha deve ter no máximo 10 caracteres.")
    .required('O campo de senha é obrigatório.')
});
