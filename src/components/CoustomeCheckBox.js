import { useField } from "formik";
import React from "react";

function CoustomeCheckBox({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  console.log(meta);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.error && meta.touched ? "input-error" : ""}
        />
        <span>i accept the term of service</span>
      </div>
      {meta.error && meta.touched && <p className="error">{meta.error}</p>}
    </>
  );
}

export default CoustomeCheckBox;
