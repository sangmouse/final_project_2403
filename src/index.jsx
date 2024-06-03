import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutRoot from "components/common/LayoutRoot";
import UserList from "components/UserList";
import UserDetail from "components/UserDetail";
import UserCreate from "components/UserCreate";
import Login from "components/Login";
import { Provider } from "react-redux";
import store from "store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        path: "",
        element: <UserList />,
      },
      {
        path: "user/:id",
        element: <UserDetail />,
      },
      {
        path: "user/create",
        element: <UserCreate />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
