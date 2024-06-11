import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/get-book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
        console.log(data);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container my-3">
        <div className="card">
          <div className="row m-2">
            <div className="col-md-6">
              <img
                src={book.imageUrl}
                className="card-img-top"
                alt={book.imageUrl}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{book.bookTitle}</h5>
                <p className="card-text">{book.bookDescription}</p>
                <p className="card-text">
                  <span>Category: </span> {book.category}
                </p>
                <p className="card-text">Author: {book.authorName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
