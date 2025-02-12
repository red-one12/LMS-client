import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { div } from "motion/react-client";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [viewMode, setViewMode] = useState("card"); // Default view is Card View
  const [showAvailable, setShowAvailable] = useState(false); // Default: show all books
  const [sortOrder, setSortOrder] = useState("default"); // Default sorting

  useEffect(() => {
    fetch("https://lms-server-gold.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data); // Initially, show all books
      });
  }, []);

  const handleFilter = () => {
    if (showAvailable) {
      setFilteredBooks(books); // Show all books
    } else {
      setFilteredBooks(books.filter((book) => book.quantity > 0)); // Show only available books
    }
    setShowAvailable(!showAvailable); // Toggle filter state
  };

  const handleSort = (order) => {
    let sortedBooks = [...filteredBooks];

    if (order === "high-to-low") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (order === "low-to-high") {
      sortedBooks.sort((a, b) => a.rating - b.rating);
    } else {
      sortedBooks = [...books]; // Default order
    }

    setFilteredBooks(sortedBooks);
    setSortOrder(order);
  };

  return (
    <div className="class-all-books ">
      <div className="container max-w-7xl mx-auto pt-8 px-4">
      <h1 className="class-all-books-text text-3xl font-bold mb-6 text-center">All Books</h1>

      {/* Filter and Sorting Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        {/* Show Available Books Button */}
        <button
          onClick={handleFilter}
          className="btn bg-sky-500 w-full md:w-auto"
        >
          {showAvailable ? "Show All Books" : "Show Available Books"}
        </button>

        {/* Sorting Dropdown */}
        <select
          className="btn bg-sky-500 p-2 shadow focus:outline-none w-full md:w-auto"
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="default">Sort by Rating</option>
          <option value="high-to-low">High to Low</option>
          <option value="low-to-high">Low to High</option>
        </select>

        {/* View Mode Dropdown */}
        <select
          className="btn p-2 bg-sky-500 shadow focus:outline-none w-full md:w-auto"
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {/* Conditional Rendering for Card View and Table View */}
      {viewMode === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book._id}
              className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="class-book-name text-xl font-semibold">{book.name}</h2>
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
                <button className="btn btn-accent mt-4 w-full">Update</button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="class-book-table-view min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="class-table-title border px-4 py-2">Image</th>
                <th className="class-table-title border px-4 py-2">Name</th>
                <th className="class-table-title border px-4 py-2">Author</th>
                <th className="class-table-title border px-4 py-2">Category</th>
                <th className="class-table-title border px-4 py-2">Rating</th>
                <th className="class-table-title border px-4 py-2">Quantity</th>
                <th className="class-table-title border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book._id} className="text-center">
                  <td className="border px-4 py-2">
                    <img
                      src={book.image}
                      alt={book.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border px-4 py-2">{book.name}</td>
                  <td className="border px-4 py-2">{book.author}</td>
                  <td className="border px-4 py-2">{book.category}</td>
                  <td className="border px-4 py-2">
                    <div className="flex justify-center items-center">
                      <ReactStars
                        count={5}
                        value={book.rating}
                        edit={false}
                        size={20}
                        activeColor="#ffd700"
                      />
                      <span className="ml-2">({book.rating})</span>
                    </div>
                  </td>
                  <td className="border px-4 py-2">
                    {book.quantity > 0 ? (
                      <span className="text-green-500">{book.quantity}</span>
                    ) : (
                      <span className="text-red-500">Out of Stock</span>
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    <Link to={`/updateBook/${book._id}`}>
                      <button className="btn btn-accent">Update</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>
  );
};

export default AllBooks;
