import { validate } from "uuid";
import * as Yup from "yup";

export const CREATE_ROLE_VALIDATION_SCHEMA = Yup.object()
  .shape({
    role: Yup.string()
      .matches(
        /^[A-Za-z\s'-]+$/,
        "Role can only contain letters, spaces, hyphens, and apostrophes"
      )
      .notRequired(), // role is optional but checked in test

    roles: Yup.array()
      .of(
        Yup.string().matches(
          /^[A-Za-z\s'-]+$/,
          "Each role can only contain letters, spaces, hyphens, and apostrophes"
        )
      )
      .notRequired(), // roles is optional but checked in test
  })
  .test(
    "role-or-roles",
    "You must provide either a single role or array of roles, but not both",
    function (values) {
      const hasRole = Boolean(values.role);
      const hasRoles = Array.isArray(values.roles) && values.roles.length > 0;

      if (hasRole && hasRoles) {
        return this.createError({
          path: hasRole ? "role" : "roles",
          message: "You must provide either role or roles, but not both",
        });
      }
      return true;
    }
  );

export const VIEW_ROLE_VALIDATION_SCHEMA = Yup.object().shape({
  id: Yup.string()
    .required("ID is required")
    .test("is-uuid", "Invalid UUID format", (value) => {
      if (!validate(value)) {
        throw new Yup.ValidationError("Invalid UUID format");
      }
      return value;
    }),
});
