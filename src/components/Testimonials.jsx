import React from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="testimonials bg-blue-50 p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">What Readers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            id: 1,
            name: "Radoan",
            feedback:
              "An amazing collection of books. I found exactly what I was looking for!",
          },
          {
            id: 2,
            name: "Rakib",
            feedback: "Great service and excellent selection of categories.",
          },
          {
            id: 3,
            name: "Rabbi",
            feedback: "Easy to navigate and borrow books. Highly recommended!",
          },
        ].map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="card shadow-md hover:shadow-lg transition duration-300 rounded-lg p-4 flex flex-col items-center"
            animate={{
              y: index % 2 === 0 ? [0, -20, 0] : [0, 20, 0], // Alternating directions
              backgroundColor: ["#ffffff", "#a7fcff", "#ffffff"], // Color change
            }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              },
              backgroundColor: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              },
            }}
          >
            <div className="flex items-center gap-2">
              <FaUser />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            </div>
            <p className="text-gray-600 mt-2 text-center">
              "{testimonial.feedback}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
