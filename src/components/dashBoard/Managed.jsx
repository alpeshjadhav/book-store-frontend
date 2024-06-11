import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const Managed = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/get-allbooks")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete-book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setBooks(books.filter((book) => book._id !== id));
      });
  };

  return (
    <>
      <div>
        <h2 className="font-bold">Manage Books</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sr No</th>
              <th scope="col">Book Title</th>
              <th scope="col">Author Name</th>
              <th scope="col">Category</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.bookTitle}</td>
                <td>{book.authorName}</td>
                <td>{book.category}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(book._id)}
                  >
                    <MdDeleteForever /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Managed;
