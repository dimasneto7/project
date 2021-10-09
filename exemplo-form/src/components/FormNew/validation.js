import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "mínumo de 2 caracteres")
    .required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email é obigatório"),
});

export default schema;
