import React, { useState } from "react";

const Upload = () => {
  const bookCategories = [
    "Horror",
    "Romance",
    "Historical Fiction",
    "Mystery & Thriller",
    "Young Adult Fiction",
    "Science Fiction",
  ];

  const [selectedCategory, setSelectedCategory] = useState(bookCategories[0]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    //handle the event
    event.preventDefault();

    const form = event.target;

    const bookTitle = form.elements.bookTitle.value;
    const authorName = form.elements.authorName.value;
    const imageUrl = form.elements.imageUrl.value;
    const pdfUrl = form.elements.pdfUrl.value;
    const bookDescription = form.elements.bookDescription.value;
    const category = selectedCategory;

    const bookObject = {
      bookTitle,
      authorName,
      imageUrl,
      pdfUrl,
      bookDescription,
      category,
    };

    console.log(bookObject);

    fetch("http://localhost:5000/upload-books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObject),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`Book uploaded successfully`);
      });

    console.log("button work!");
  };

  return (
    <>
      <h2>Upload Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="bookTitle">
            Book Title
          </label>
          <input
            className="form-control"
            type="text"
            name="bookTitle"
            id="bookTitle"
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label" htmlFor="authorName">
            Author Name
          </label>
          <input
            className="form-control"
            type="text"
            name="authorName"
            id="authorName"
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label" htmlFor="imageUrl">
            Image Url
          </label>
          <input
            className="form-control"
            type="text"
            name="imageUrl"
            id="imageUrl"
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label" htmlFor="pdfUrl">
            PDF Url
          </label>
          <input
            className="form-control"
            type="text"
            name="pdfUrl"
            id="pdfUrl"
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label" htmlFor="bookDescription">
            Book Description
          </label>
          <input
            className="form-control"
            type="text"
            name="bookDescription"
            id="bookDescription"
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label" htmlFor="category">
            Book Category
          </label>
          <select
            className="form-control"
            id="category"
            onChange={handleChange}
            value={selectedCategory}
          >
            {bookCategories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary">Upload book</button>
        </div>
      </form>
    </>
  );
};

export default Upload;
