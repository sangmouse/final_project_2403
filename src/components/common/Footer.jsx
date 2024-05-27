import React from "react";
import imgLogo from "assets/images/footer_logo.png";
import classes from "assets/styles/Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <Link to="/" className={`${classes.logo} d-inline-flex`}>
              <img src={imgLogo} alt="logo" />
            </Link>
            <p className={classes.desc}>
              Cras incident lobotids feudist makes viramas sagittas eu valuta.
            </p>
          </div>
          <div>
            <h4>RESOURCES</h4>
            <ul className="d-flex flex-column row-gap-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">User List</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <p className="mt-5 mb-4">
            Copyright © RESTINA 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
