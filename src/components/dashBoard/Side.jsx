import React from "react";
import { Link } from "react-router-dom";
import { HiUpload, HiViewBoards } from "react-icons/hi";

export const Side = () => {
  return (
    <>
      <div className="sidebar text-center ">
        <h4 className="text-uppercase fw-bold">Dashboard</h4>
        <hr />
        <div className="list-group">
          <Link
            to={"upload"}
            className="list-group-item list-group-item-action"
          >
            <HiUpload />
            <span className="fw-bolder me-2">Upload Book</span>
          </Link>
          <Link
            to={"manage"}
            className="list-group-item list-group-item-action"
          >
            <HiViewBoards />{" "}
            <span className="fw-bolder me-2">Manage Books</span>
          </Link>
        </div>
      </div>
    </>
  );
};
