import React, { useEffect, useState } from "react";
import classes from "assets/styles/UserList.module.scss";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserByID, getUserList } from "store/user/userReducer";
import { Button } from "react-bootstrap";

const UserList = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [userSelected, setUserSelected] = useState(null);
  const dispatch = useDispatch();
  const userList = useSelector((store) => store.user.userList);

  const handleDeleteUser = () => {
    dispatch(deleteUserByID(userSelected?.id));
    dispatch(getUserList());
    setModalShow(false);
  };

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <div>
            <Link
              to="user/create"
              className={`${classes.btn} ${classes.btn__create__new}`}
            >
              Create New User
            </Link>
          </div>
          <table>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Birthday</th>
              <th>Department</th>
              <th colSpan={2}>Action</th>
            </tr>

            {userList?.map((item) => (
              <tr key={item?.id}>
                <td>{item?.id}</td>
                <td>{item?.firstName}</td>
                <td>{item?.lastName}</td>
                <td>{item?.address}</td>
                <td>{item?.birthday}</td>
                <td>{item?.department}</td>
                <td>
                  <Link
                    className={`${classes.btn} ${classes.btn__edit}`}
                    to={`user/${item?.id}`}
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className={`${classes.btn} ${classes.btn__delete}`}
                    onClick={() => {
                      setModalShow(true);
                      setUserSelected(item);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>

      {/* modal */}
      <Modal
        show={modalShow}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Are you sure you want to delete this user?</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="bg-transparent text-black border-black border-opacity-25"
            onClick={() => {
              setUserSelected(null);
              setModalShow(false);
            }}
          >
            Cancel
          </Button>
          <Button className={classes.btn__delete} onClick={handleDeleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserList;
