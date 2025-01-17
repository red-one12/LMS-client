import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import RegLottie from "../assets/Lottie/lottieReg.json";
import Swal from "sweetalert2";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigateToHome = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      setError("Password must have at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must have at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
                       title: "Registration Done!",
                                                      icon: "success",
                                                     draggable: true
                                                    });
        navigateToHome('/');
        return updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          setUser(user);
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen px-10">
      {/* Lottie Animation Section */}
      <div className="w-3/4 m-auto md:w-1/2">
        <Lottie animationData={RegLottie} loop autoplay />
      </div>

      {/* Registration Form Section */}
      <div className="w-full max-w-md rounded p-6">
        <h1 className="text-5xl text-blue-400 font-bold mb-4 text-center">Register</h1>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your photo URL"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
