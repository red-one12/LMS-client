import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { motion } from "framer-motion";

const FeaturedBooks = () => {
  const { user } = useContext(AuthContext);

  // Animation variants for motion
  const cardVariants = {
    animate: {
      y: [0, -10, 0], // Moves slightly up and back to the original position
      transition: {
        duration: 2, // Duration of one full animation cycle
        repeat: Infinity, // Infinite loop
        ease: "easeInOut", // Smooth movement
      },
    },
  };

  return (
    <div className="featured-books bg-gray-100 p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            id: 1,
            title: "Educated",
            image:
              "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
          },
          {
            id: 2,
            title: "Life is Beautiful",
            image:
              "https://m.media-amazon.com/images/M/MV5BZTBhOGYzZjQtYzE0Mi00MGIwLWE0MWYtNzMxNTM2OTFkM2NjXkEyXkFqcGc@._V1_.jpg",
          },
          {
            id: 3,
            title: "The Origin of Species",
            image:
              "https://cdn.kobo.com/book-images/7f7cb400-e00d-4608-9fd8-e8c672820781/1200/1200/False/the-origin-of-species-44.jpg",
          },
        ].map((book) => (
          <motion.div
            key={book.id}
            className="card bg-white shadow-md rounded-lg overflow-hidden"
            animate="animate"
            variants={cardVariants}
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{book.title}</h3>

              <Link to={user ? "/allBooks" : "/login"}>
                <button className="btn bg-sky-500 mt-4">Interested</button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
