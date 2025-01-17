import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddBooks = () => {
  const { user } = useContext(AuthContext);

  const [bookData, setBookData] = useState({
    image: "",
    name: "",
    quantity: 1,
    author: "",
    category: "Science",
    description: "",
    rating: 1,
  });

  const [isLoading, setIsLoading] = useState(false);

  const categories = ["Science", "Fiction", "History", "Biography"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!bookData.image || !bookData.name || !bookData.author || !bookData.description) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Add user association
    const bookToSubmit = { ...bookData, addedBy: user?.email };
    setIsLoading(true);

    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookToSubmit),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.insertedId) {
          alert("Book added successfully!");
          setBookData({
            image: "",
            name: "",
            quantity: 1,
            author: "",
            category: "Science",
            description: "",
            rating: 1,
          });
        } else {
          alert("Failed to add the book.");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
        alert("Failed to add the book.");
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Book Cover Image URL</label>
          <input
            type="text"
            name="image"
            value={bookData.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter Image URL"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Book Title</label>
          <input
            type="text"
            name="name"
            value={bookData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter Book Title"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Author Name</label>
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter Author Name"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={bookData.quantity}
            onChange={handleChange}
            className="input input-bordered w-full"
            min="1"
            placeholder="Enter Quantity"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
            value={bookData.category}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Short Description</label>
          <textarea
            name="description"
            value={bookData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Enter a short description"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Rating</label>
          <input
            type="number"
            name="rating"
            value={bookData.rating}
            onChange={handleChange}
            className="input input-bordered w-full"
            min="1"
            max="5"
            step="0.1"
            placeholder="Enter Rating (1-5)"
            required
          />
        </div>

        <button type="submit" className="btn btn-accent w-full" disabled={isLoading}>
          {isLoading ? "Adding Book..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
