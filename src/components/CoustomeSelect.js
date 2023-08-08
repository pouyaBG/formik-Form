import { useField } from "formik";
import React from "react";

function CoustomeSelect({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  console.log(meta);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error && meta.touched ? "input-error" : ""}
      />
      {meta.error && meta.touched && (
        <p className="error">{meta.error}</p>
      )}
    </>
  );
}

export default CoustomeSelect;
