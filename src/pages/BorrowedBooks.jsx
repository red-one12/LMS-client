import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [isReturning, setIsReturning] = useState(null);

  useEffect(() => {
    fetch(`https://lms-server-gold.vercel.app/borrowedBooks`)
      .then((res) => res.json())
      .then((data) => {
        const userBorrowedBooks = data.filter(
          (book) => book.email === user.email
        );
        setBorrowedBooks(userBorrowedBooks);
      })
      .catch((error) => {
        console.error("Error fetching borrowed books:", error);
      });
  }, [user.email]);

  const handleReturnBook = (id) => {
    setIsReturning(id);
    fetch(`https://lms-server-gold.vercel.app/borrowedBooks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Book returned successfully") {
          Swal.fire({
            title: "Book Returned Successfully!",
            icon: "success",
            draggable: true,
          });
          setBorrowedBooks((prevBooks) =>
            prevBooks.filter((book) => book._id !== id)
          );
        }
      })
      .catch((error) => {
        console.error("Error returning book:", error);
      })
      .finally(() => {
        setIsReturning(null); // Reset the returning state
      });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">My Borrowed Books</h1>
      {borrowedBooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {borrowedBooks.map((borrowedBook) => (
            <div key={borrowedBook._id} className="card shadow-lg">
              <img
                src={borrowedBook.bookDetails?.image}
                alt={borrowedBook.bookDetails?.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">
                  {borrowedBook.bookDetails?.name}
                </h2>
                <p>Category: {borrowedBook.bookDetails?.category}</p>
                <p>
                  Borrowed Date:{" "}
                  {new Date(borrowedBook.issuedDate).toLocaleDateString()}
                </p>
                <p>
                  Return Date:{" "}
                  {new Date(borrowedBook.returnDate).toLocaleDateString()}
                </p>
                <button
                  className="btn btn-error mt-4"
                  onClick={() => handleReturnBook(borrowedBook._id)}
                  disabled={isReturning === borrowedBook._id}
                >
                  {isReturning === borrowedBook._id ? "Returning..." : "Return"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>You have not borrowed any books yet.</p>
      )}
    </div>
  );
};

export default BorrowedBooks;
