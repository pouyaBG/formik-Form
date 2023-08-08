import { Field, Form, Formik } from "formik";
import React from "react";
import CustomInput from "./CoustomeInput";
import { advancedSchema } from "../schemas";
import CoustomeSelect from "./CoustomeSelect";
import CoustomeCheckBox from "./CoustomeCheckBox";

function AdvancForm() {
  return (
    <div>
      <Formik
        initialValues={{ name: "", jobType: "", acceptedTos: false }}
        validationSchema={advancedSchema}
      >
        {({isSubmitting}) => (
          <Form>
            {/* <Field type="text" name="email" placeholder="Email" /> */}
            <CustomInput
              label="username"
              name="username"
              type="text"
              placeholder="Enter your username"
            />
            <CoustomeSelect
              label="job Type"
              name="jobType"
              placeholder="Enter your job type"
            >
              <option value="">Please select a job type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Product Manager</option>
              <option value="other">Other</option>
            </CoustomeSelect>
            <CoustomeCheckBox type="checkbox" name="acceptedTos" />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button disabled={isSubmitting} type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AdvancForm;
