import React from "react";

function BasicForm() {
  return (
    <div>
      <form autoComplete="off">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" />
      </form>
    </div>
  );
}

export default BasicForm;
