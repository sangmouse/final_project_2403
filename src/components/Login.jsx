import React from "react";
import classes from "assets/styles/Login.module.scss";

const Login = () => {
  return (
    <div className={`position-relative ${classes.login}`}>
      <div className="container">
        <div className={classes.form}>
          <div className={classes.form__item}>
            <label htmlFor="username">User Name</label>
            <input type="text" placeholder="Enter your user name" />
          </div>
          <div className={classes.form__item}>
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Enter your password" />
          </div>
          <div className={classes.form__item}>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
