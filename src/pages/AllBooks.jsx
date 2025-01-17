import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  // Filtered books based on the availability
  const filteredBooks = showAvailable
    ? books.filter((book) => book.quantity > 0)
    : books;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">All Books</h1>
      <div className="flex justify-end mb-4">
        <button
          className="btn btn-primary"
          onClick={() => setShowAvailable(!showAvailable)}
        >
          {showAvailable ? "Show All Books" : "Show Available Books"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div key={book._id} className="border p-4 rounded shadow">
            <img
              src={book.image}
              alt={book.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{book.name}</h2>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-500">Category: {book.category}</p>
            <div className="flex items-center mt-2">
              <ReactStars
                count={5}
                value={book.rating}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <span className="ml-2 text-gray-600">({book.rating})</span>
            </div>
            <p className="text-gray-600 mt-2">
              Quantity:{" "}
              <span
                className={`${
                  book.quantity > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {book.quantity > 0 ? book.quantity : "Out of Stock"}
              </span>
            </p>
            <Link to={`/updateBook/${book._id}`}>
              <button className="btn btn-accent mt-4">Update</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
