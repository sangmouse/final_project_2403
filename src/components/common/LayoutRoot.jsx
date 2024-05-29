import Footer from "components/common/Footer";
import Header from "components/common/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import classes from "assets/styles/LayoutRoot.module.scss";

const LayoutRoot = () => {
  return (
    <div
      className={`d-flex justify-content-between flex-column ${classes.layout__root}`}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutRoot;
