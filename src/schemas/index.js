import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Plese enter a valid email address")
    .required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must be match")
    .required("Required"),
});
