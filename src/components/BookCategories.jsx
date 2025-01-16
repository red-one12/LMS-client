import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const BookCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books-category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-center text-5xl font-bold">Book Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>




              <Link to={`/books/${category.name}`}>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600">
                  Explore {category.name}
                </button>
              </Link>




            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
