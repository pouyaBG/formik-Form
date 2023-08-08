import { Field, Form, Formik } from "formik";
import React from "react";
import CustomInput from "./CoustomeInput";
import { advancedSchema } from "../schemas";

function AdvancForm() {
  return (
    <div>
      <Formik
        initialValues={{ name: "", jobType: "", acceptedTos: false }}
        validationSchema={advancedSchema}
      >
        {(props) => (
          <Form>
            {/* <Field type="text" name="email" placeholder="Email" /> */}
            <CustomInput
              label="username"
              name="username"
              type="text"
              placeholder="Enter your username"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AdvancForm;
