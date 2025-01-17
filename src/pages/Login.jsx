import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Lottie from "lottie-react";
import LottieLogin from "../assets/Lottie/lottieLogin.json";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigateToHome = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigateToHome("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("successful", result);
        navigateToHome("/");
      })
      .catch((error) => {
        console.log("problem", error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row items-center bg-white rounded p-6 max-w-4xl w-full">
        {/* Lottie Animation */}
        <div className="w-full md:w-4/5">
          <Lottie animationData={LottieLogin} loop={true} />
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold mb-4 text-center text-[#4b3bff]">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={handleGoogleLogin}
              className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
            >
              Login with Google
            </button>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
