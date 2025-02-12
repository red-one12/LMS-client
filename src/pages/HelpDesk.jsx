import Lottie from "lottie-react";
import helpLottie from "../assets/Lottie/help lottie.json";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const HelpDesk = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleHelpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    const problem = form.problem.value;
    const email = form.email.value;
    const helpInfo = { problem, email };

    // console.log("Submitting:", helpInfo);

    try {
      const response = await axios.post("http://localhost:5000/helps", helpInfo);
      console.log("Response:", response.data);

      // Show success message
      Swal.fire({
        title: "Help Request Submitted!",
        text: "Our team will get back to you soon.",
        icon: "success",
      });

      form.reset(); // Reset the form
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Try again later.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center mt-10">
        Drop Your <span className="text-red-500">Problem</span> Here
      </h1>

      <div className="mt-10 flex flex-col md:flex-row">
        <div className="w-1/3">
          <Lottie animationData={helpLottie} loop={true} />
        </div>

        <div className="w-2/3">
          <form onSubmit={handleHelpSubmit} className="card-body">
            {/* Problem Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Problem</span>
              </label>
              <input
                type="text"
                name="problem"
                placeholder="Write Your Problem Here..."
                className="input input-bordered"
                required
              />
            </div>

            {/* Email Input (Read-Only) */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className={`btn bg-[#267ffb] ${loading ? "opacity-50 cursor-not-allowed" : ""}`} disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
