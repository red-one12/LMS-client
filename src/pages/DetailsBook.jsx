import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const DetailsBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [todaysDate, setTodaysDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setTodaysDate(today);
  }, []);

  const bookId = id;

  useEffect(() => {
    fetch(`https://lms-server-gold.vercel.app/book/${bookId}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, [bookId]);

  const handleBorrow = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const issuedDate = form.todaysDate.value;
    const returnDate = form.returnDate.value;

    const borrowBookInfo = { bookId, name, email, issuedDate, returnDate };

    fetch("https://lms-server-gold.vercel.app/borrowedBooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(borrowBookInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertResult?.insertedId) {
          Swal.fire({
            title: "Book Borrowed Successfully!",
            icon: "success",
            draggable: true,
          });
          setBook((prevBook) => ({
            ...prevBook,
            quantity: prevBook.quantity - 1,
          }));
          // Close the modal
          document.getElementById("borrow_modal").close();
          navigate("/borrowedBooks");
        } else if (data.message === "Book is out of stock") {
          alert("Sorry, this book is out of stock.");
        } else if (data.message === "You have already borrowed this book") {
          alert("You have already borrowed this book.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex">
        <div>
          <img
            src={book.image}
            alt={book.name}
            className="w-48 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
          />
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">{book.name}</h1>
          <p className="text-gray-600 text-lg">by {book.author}</p>
          <p className="text-gray-500 text-md mt-2">
            Category: {book.category}
          </p>
          <p className="text-gray-500 text-md">Quantity: {book.quantity}</p>
          <p className="text-yellow-500 font-semibold">Rating: {book.rating}</p>

          <button
            onClick={() => document.getElementById("borrow_modal").showModal()}
            className="btn btn-accent mt-4"
            disabled={book.quantity === 0}
          >
            {book.quantity === 0 ? "Out of Stock" : "Borrow"}
          </button>

          <dialog
            id="borrow_modal"
            className="modal modal-bottom sm:modal-middle"
          >
            <form onSubmit={handleBorrow} className="modal-box">
              <h3 className="font-bold text-lg">Borrow Book</h3>
              <p className="py-4">Fill out the form to borrow this book:</p>

              <div className="flex items-center">
                <label className="font-semibold">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName || ""}
                  readOnly
                  className="input input-bordered mb-2 w-full"
                />
              </div>

              <div className="flex items-center">
                <label className="font-semibold">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={user?.email || ""}
                  readOnly
                  className="input input-bordered mb-2 w-full"
                />
              </div>

              <div>
                <label className="font-semibold">Today's Date:</label>
                <input
                  type="date"
                  name="todaysDate"
                  className="input input-bordered mb-4"
                  required
                  value={todaysDate}
                  readOnly
                />
              </div>

              <div>
                <label className="font-semibold">Return Date:</label>
                <input
                  type="date"
                  name="returnDate"
                  className="input input-bordered mb-4"
                  required
                />
              </div>

              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Borrow
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    document.getElementById("borrow_modal").close()
                  }
                >
                  Close
                </button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default DetailsBook;
