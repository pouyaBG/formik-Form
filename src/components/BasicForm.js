import { useFormik } from "formik";
import React from "react";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function BasicForm() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="on">
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          type="email"
          placeholder="Enter your email"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <label htmlFor="age">Age</label>
        <input
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          id="age"
          type="number"
          placeholder="Enter your age"
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
        <label htmlFor="password">Password</label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          type="password"
          placeholder="Enter your password"
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        <label htmlFor="confirmPassword">confirm Password</label>
        <input
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          id="confirmPassword"
          type="password"
          placeholder="Enter your password"
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button disabled={isSubmitting} onClick={handleSubmit}>
          Sumbit
        </button>
      </form>
    </div>
  );
}

export default BasicForm;
