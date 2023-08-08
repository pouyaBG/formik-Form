import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Plese enter a valid email address")
    .required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup.string().min(5).required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must be match")
    .required("Required"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});
