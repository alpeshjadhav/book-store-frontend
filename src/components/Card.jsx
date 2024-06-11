import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/get-allbooks")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      });
  }, []);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterBooks = books.filter((book) =>
    book.bookTitle.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search your book"
          onChange={handleSearch}
        />
      </div>

      <h1 className="text-center">Have a look at our book collection</h1>
      <div className="row g-4">
        {filterBooks.map((book, index) => (
          <div className="col-md-3" key={index}>
            <div className="card">
              <img
                src={book.imageUrl}
                className="card-img-top"
                alt={book.imageUrl}
              />
              <div className="card-body">
                <h5 className="card-title">{book.bookTitle}</h5>
                <p className="card-text">{book.bookDescription}</p>
                <Link to={`/book/${book._id}`}>
                  <button className="btn btn-primary" target="default">
                    Show Deatils
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
