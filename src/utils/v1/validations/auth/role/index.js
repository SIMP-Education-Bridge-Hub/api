import * as Yup from "yup";

export const CREATE_ROLE_VALIDATION_SCHEMA = Yup.object().shape({
  role: Yup.string()
    .matches(
      /^[A-Za-z\s'-]+$/,
      "Role can only contain letters, spaces, hyphens, and apostrophes"
    )
    .required("Role is required"),
});
