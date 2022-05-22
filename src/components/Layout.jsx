import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div className="container p-10 p-sm-1 ">
      <div className="row d-flex justify-content-center ">
        <div className="col-xl-6 col-lg-7 col-md-10">
          <div className="card">
            <div className="card-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
