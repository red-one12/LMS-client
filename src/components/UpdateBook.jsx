import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://lms-server-gold.vercel.app/book/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedBook = {
      image: form.image.value,
      name: form.name.value,
      author: form.author.value,
      category: form.category.value,
      rating: parseFloat(form.rating.value),
    };

    fetch(`https://lms-server-gold.vercel.app/book/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result.modifiedCount > 0) {
          Swal.fire({
            title: "Updated",
            icon: "success",
            draggable: true,
          });
          navigate("/allBooks");
        }
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Update Book</h1>
      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 gap-4 max-w-md mx-auto"
      >
        <input
          type="text"
          name="image"
          defaultValue={book.image}
          placeholder="Image URL"
          className="input input-bordered"
          required
        />
        <input
          type="text"
          name="name"
          defaultValue={book.name}
          placeholder="Book Name"
          className="input input-bordered"
          required
        />
        <input
          type="text"
          name="author"
          defaultValue={book.author}
          placeholder="Author Name"
          className="input input-bordered"
          required
        />
        <select
          name="category"
          defaultValue={book.category}
          className="select select-bordered"
          required
        >
          <option value="Fiction">Fiction</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Science">Science</option>
        </select>
        <input
          type="number"
          name="rating"
          defaultValue={book.rating}
          placeholder="Rating (1-5)"
          className="input input-bordered"
          min="1"
          max="5"
          step="0.1"
          required
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
