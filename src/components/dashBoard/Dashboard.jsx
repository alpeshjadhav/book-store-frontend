import React from "react";
import { Side } from "./Side";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <div className="container my-2">
        <div className="row">
          <div className="col-md-3">
            <Side />
          </div>
          <div className="col-md-9">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};
