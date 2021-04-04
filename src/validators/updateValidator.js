import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup
    .string("Este campo deve ser uma string."),
  email: Yup
    .string("Este campo deve ser uma string.")
    .email('Email inválido. Por favor, verifique seu email e tente novamente.'),
});
