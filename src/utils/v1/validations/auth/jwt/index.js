import * as Yup from "yup";
import { constants } from "../../../../../constants/index.js";

export const JWT_VALIDATION_SCHEMA = Yup.object().shape({
  encryption: Yup.string()
    .required("Encryption is required")
    .oneOf(constants.apiEncryptions, "Invalid encryption type"),

  dataToEncrypt: Yup.object()
    .required("dataToEncrypt is required")
    .when("encryption", {
      is: "route",
      then: (schema) =>
        schema.shape({
          route: Yup.string().required(
            "Route name is required'"
          ),
        }),
    }),
});
