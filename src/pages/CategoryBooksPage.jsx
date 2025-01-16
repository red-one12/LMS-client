import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryBooksPage = () => {
  const { category } = useParams(); 
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    fetch(`http://localhost:5000/books/${category}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [category]);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center">{category} Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {books.map((book) => (
          <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={book.image} alt={book.name} className="w-full h-80 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{book.name}</h2>
              <p className="text-gray-600">Author: {book.author}</p>
              <p className="text-gray-600">Category: {book.category}</p>
              <p className="text-gray-600">Quantity: {book.quantity}</p>
              <p className="text-gray-600">Rating: {book.rating}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooksPage;
