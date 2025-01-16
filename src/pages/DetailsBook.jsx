import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const DetailsBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, [id]);

  const handleBorrow = async (event) => {
    event.preventDefault();
    const returnDate = event.target.returnDate.value;

    const borrowData = {
      user: {
        name: user.displayName,
        email: user.email,
      },
      returnDate,
    };

    try {
      const response = await fetch(`http://localhost:5000/borrow/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(borrowData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setBook((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error borrowing book:", error);
    }
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
          <p className="text-gray-500 text-md mt-2">Category: {book.category}</p>
          <p className="text-gray-500 text-md">Quantity: {book.quantity}</p>
          <p className="text-yellow-500 font-semibold">Rating: {book.rating}</p>

       
          <button
            onClick={() => document.getElementById("borrow_modal").showModal()}
            className="btn btn-accent mt-4"
            disabled={book.quantity === 0}
          >
            Borrow
          </button>

     
          <dialog id="borrow_modal" className="modal modal-bottom sm:modal-middle">
            <form className="modal-box" onSubmit={handleBorrow}>
              <h3 className="font-bold text-lg">Borrow Book</h3>
              <p className="py-4">Fill out the form to borrow this book:</p>

              <div className="flex items-center">
              <label className="font-semibold">Name:</label>
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="input input-bordered mb-2 w-full"
              />
              </div>

              <div className="flex items-center">
              <label className="font-semibold">Email:</label>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="input input-bordered mb-2 w-full"
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
                  onClick={() => document.getElementById("borrow_modal").close()}
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
