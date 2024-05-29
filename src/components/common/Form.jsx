import React from "react";
import classes from "assets/styles/Form.module.scss";

const Form = () => {
  return (
    <div className={classes.form}>
      <div className={classes.form__item}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" placeholder="Enter your first name" />
      </div>
      <div className={classes.form__item}>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" placeholder="Enter your last name" />
      </div>
      <div className={classes.form__item}>
        <label htmlFor="address">Address</label>
        <textarea
          name="address"
          id="address"
          cols="30"
          rows="10"
          placeholder="Enter your address"
        ></textarea>
      </div>
      <div className={classes.form__item}>
        <label htmlFor="birthday">Birthday</label>
        <input type="date" name="birthday" id="birthday" />
      </div>
      <div className={classes.form__item}>
        <label htmlFor="Department">Department</label>
        <select name="" id="">
          <option value="vti">VTI Group</option>
          <option value="fsoft">FPT Software</option>
          <option value="framgia">Framgia</option>
          <option value="samsung">Samsung</option>
        </select>
      </div>
      <div className={classes.form__item}>
        <button>Update</button>
      </div>
    </div>
  );
};

export default Form;
