import React from "react";
import Slide from "./Slide";

export default function Banner() {
  return (
    <>
      <div className="container m-2">
        <div className="row">
          <div className="col-md-6">
            <h1>Search your products</h1>
          </div>
          <div className="col-md-6">
            <Slide />
          </div>
        </div>
      </div>
    </>
  );
}
