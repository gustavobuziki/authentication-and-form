import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .required("Email is required.")
    .email("Provide a valid email.")
    .min(10, "Minimum 10 characters.")
    .max(50, "Maximum 50 characters."),
  name: yup
    .string()
    .required("Name is required.")
    .min(2, "Minimum 10 characters.")
    .max(50, "Maximum 50 characters."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Minimum 8 characters.")
    .max(50, "Maximum 50 characters."),
});

export default schema;
