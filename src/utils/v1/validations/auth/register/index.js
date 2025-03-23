import * as Yup from "yup";

export const REGISTER_VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      /^[A-Za-z\s'-]+$/,
      "First name can only contain letters, spaces, hyphens, and apostrophes"
    )
    .required("First name is required"),

  secondName: Yup.string()
    .optional()
    .matches(
      /^[A-Za-z\s'-]*$/,
      "Second name can only contain letters, spaces, hyphens, and apostrophes"
    ),

  thirdName: Yup.string()
    .optional()
    .matches(
      /^[A-Za-z\s'-]*$/,
      "Third name can only contain letters, spaces, hyphens, and apostrophes"
    ),

  lastName: Yup.string()
    .matches(
      /^[A-Za-z\s'-]+$/,
      "Last name can only contain letters, spaces, hyphens, and apostrophes"
    )
    .required("Last name is required"),

  email: Yup.string()
    .trim()
    .lowercase()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    )
    .required("Email address is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character (@, $, !, %, *, ?, &, #)"
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});
