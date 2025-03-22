import * as Yup from "yup";

export const LOGIN_VALIDATION_SCHEMA = Yup.object().shape({
  username: Yup.string()
    .email("Please enter a valid email address")
    .required("Username is required"),
  password: Yup.string().required("Password is required"),
});
