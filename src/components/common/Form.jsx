import React, { useState } from "react";
import classes from "assets/styles/Form.module.scss";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "store/user/userReducer";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    address: "",
    birthday: "",
    department: "samsung",
  });

  const [messageError, setMessageError] = useState({
    firstName: "",
    lastName: "",
    address: "",
    birthday: "",
  });

  const msgError = {
    firstName: "",
    lastName: "",
    address: "",
    birthday: "",
  };

  const maxDate = () => {
    let dtToday = new Date();
    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    let year = dtToday.getFullYear();

    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();

    return year + "-" + month + "-" + day;
  };

  const handleSubmit = () => {
    if (!user?.firstName?.trim()) {
      msgError.firstName = "💀 First Name is required";
    }
    if (!user.lastName?.trim()) {
      msgError.lastName = "💀 Last Name is required";
    }
    if (!user.address?.trim()) {
      msgError.address = "💀 Address is required";
    }
    if (!user.birthday?.trim()) {
      msgError.birthday = "💀 Birthday is required";
    }

    setMessageError({
      ...messageError,
      firstName: msgError.firstName,
      lastName: msgError.lastName,
      address: msgError.address,
      birthday: msgError.birthday,
    });

    if (
      !!user?.firstName?.trim() &&
      !!user.lastName?.trim() &&
      !!user.address?.trim() &&
      !!user.birthday?.trim()
    ) {
      const userNew = {
        ...user,
        id: nanoid(10),
      };
      dispatch(createUser(userNew));
      navigate("/");
    }
  };

  const onChangeFirstName = (event) => {
    setUser({
      ...user,
      firstName: event.target.value,
    });
    setMessageError({
      ...messageError,
      firstName: "",
    });
  };
  const onChangeLastName = (event) => {
    setUser({
      ...user,
      lastName: event.target.value,
    });
    setMessageError({
      ...messageError,
      lastName: "",
    });
  };
  const onChangeAddress = (event) => {
    setUser({
      ...user,
      address: event.target.value,
    });
    setMessageError({
      ...messageError,
      address: "",
    });
  };
  const onChangeBirthDay = (event) => {
    setUser({
      ...user,
      birthday: event.target.value,
    });
    setMessageError({
      ...messageError,
      birthday: "",
    });
  };
  const onChangeDepartment = (event) => {
    setUser({
      ...user,
      department: event.target.value,
    });
    setMessageError({
      ...messageError,
      department: "",
    });
  };

  return (
    <div className={classes.form}>
      <div className={classes.form__item}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          value={user?.firstName}
          onChange={onChangeFirstName}
        />
      </div>
      <div className={classes.form__item}>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          value={user?.lastName}
          onChange={onChangeLastName}
        />
      </div>
      <div className={classes.form__item}>
        <label htmlFor="address">Address</label>
        <textarea
          name="address"
          id="address"
          cols="30"
          rows="10"
          placeholder="Enter your address"
          value={user?.address}
          onChange={onChangeAddress}
        ></textarea>
      </div>
      <div className={classes.form__item}>
        <label htmlFor="birthday">Birthday</label>
        <input
          type="date"
          name="birthday"
          id="birthday"
          value={user.birthday}
          onChange={onChangeBirthDay}
          max={maxDate()}
        />
      </div>
      <div className={classes.form__item}>
        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
          value={user.department}
          onChange={onChangeDepartment}
        >
          <option value="vti">VTI Group</option>
          <option value="fsoft">FPT Software</option>
          <option value="framgia">Framgia</option>
          <option value="samsung">Samsung</option>
        </select>
      </div>
      <div className={classes.form__item}>
        <button type="button" onClick={handleSubmit}>
          Create
        </button>
      </div>
      <div className={classes.message__error}>
        <p>{messageError?.firstName}</p>
        <p>{messageError?.lastName}</p>
        <p>{messageError?.address}</p>
        <p>{messageError?.birthday}</p>
      </div>
    </div>
  );
};

export default Form;
