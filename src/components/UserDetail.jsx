import axios from "axios";
import Form from "components/common/Form";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState(null);
  const userID = useParams();

  const getUserByID = async () => {
    const response = await axios.get(
      `http://localhost:3000/users/${userID?.id}`
    );
    setUserDetail(response?.data);
  };

  const resetUserDetail = () => setUserDetail(null);

  useEffect(() => {
    getUserByID();
  }, []);

  return (
    <div className="container">
      <Form userDetail={userDetail} resetUserDetail={resetUserDetail} />
    </div>
  );
};

export default UserDetail;
