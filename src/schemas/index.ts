import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const formSchema = yup.object().shape({
    nome: yup.string().min(2, "É necessário ter no minimo 2 caracteres").required("É necessario um nome"),
    email: yup.string().email("escolha um email válido").required("Email é necessario"),
    senha: yup
    .string()
    .min(5)
    .matches(passwordRules, {message: "É necessário conter letra maiscula, minuscula e um número"})
    .required("É necessário escolher uma senha"),
    confirmarSenha: yup
    .string()
    .oneOf([yup.ref('senha'), null], "As senhas não são iguais")
    .required("É necessario confirmar a senha")
})