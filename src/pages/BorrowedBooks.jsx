import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  // Fetch borrowed books based on the logged-in user's email
  useEffect(() => {
    if (user) {
      axios.get(`/borrowed-books?email=${user.email}`)
        .then(res => {
          setBorrowedBooks(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching borrowed books:', err);
          setLoading(false);
        });
    }
  }, [user]);

  // Handle book return
  const handleReturn = (bookId) => {
    if (user) {
      axios.put(`/return-book/${bookId}`, { user: user.email })
        .then(res => {
          alert(res.data.message);
          setBorrowedBooks(prevBooks => prevBooks.filter(book => book.bookId !== bookId));
        })
        .catch(err => {
          console.error('Error returning book:', err);
        });
    } else {
      alert('You must be logged in to return a book.');
    }
  };

  // Safely render borrowed books if the data is an array
  return (
    <div>
      <h2>Borrowed Books</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {Array.isArray(borrowedBooks) && borrowedBooks.length === 0 ? (
            <p>No borrowed books found.</p>
          ) : (
            Array.isArray(borrowedBooks) && borrowedBooks.map(book => (
              <div key={book.bookId} className="book-card">
                <img src={book.coverImage} alt={book.title} />
                <h3>{book.title}</h3>
                <p>Category: {book.category}</p>
                <p>Borrowed On: {new Date(book.borrowedAt).toLocaleDateString()}</p>
                <p>Return By: {new Date(book.returnDate).toLocaleDateString()}</p>
                <button onClick={() => handleReturn(book.bookId)}>Return Book</button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;
