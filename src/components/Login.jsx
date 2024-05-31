import React, { useEffect, useState } from "react";
import classes from "assets/styles/Login.module.scss";
import { useNavigate } from "react-router-dom";

const userDefault = {
  username: "quangpm12",
  password: "123456",
};

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const msgError = {
    username: "",
    password: "",
    invalidAccount: "",
  };

  const [messageError, setMessageError] = useState({
    username: "",
    password: "",
    invalidAccount: "",
  });

  const onChangeUserName = (event) => {
    setUser({
      ...user,
      username: event.target.value,
    });
  };

  function onChangePassword(event) {
    setUser({
      ...user,
      password: event.target.value,
    });
  }

  const handleSignIn = () => {
    // validate form

    if (user.username.trim().length === 0) {
      msgError.username = "💀 User name is required";
    }
    if (user.password.trim().length === 0) {
      msgError.password = "💀 Password is required";
    } else {
      if (
        user.username.trim() !== userDefault.username ||
        user.password.trim() !== userDefault.password
      ) {
        msgError.invalidAccount = "💀 Incorrect username and password";
      } else {
        localStorage.setItem(
          "userToken",
          "4G02zBeVAt2GMF5aV0P77PeDxoIGKpQhquQkohHcVfQPbVvPkisHs2qAkyq1lcq6"
        );
        setUser({
          ...user,
          username: "",
          password: "",
        });
        navigate("/");
      }
    }

    setMessageError({
      ...messageError,
      username: msgError.username,
      password: msgError.password,
      invalidAccount: msgError.invalidAccount,
    });
  };

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className={`position-relative ${classes.login}`}>
      <div className="container">
        <div className={classes.form}>
          <div className={classes.message__error}>
            <p>{messageError.username}</p>
            <p>{messageError.password}</p>
            <p>{messageError.invalidAccount}</p>
          </div>
          <div className={classes.form__item}>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              placeholder="Enter your user name"
              value={user.username}
              onChange={onChangeUserName}
            />
          </div>
          <div className={classes.form__item}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={onChangePassword}
            />
          </div>
          <div className={classes.form__item}>
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
