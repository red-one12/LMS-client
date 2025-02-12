import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact <span className="text-blue-500">Us</span></h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Email */}
        <div className="flex items-center gap-4 p-5 bg-white shadow-md rounded-lg">
          <FaEnvelope className="text-blue-500 text-3xl" />
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-600">radoanahmed1242000@.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 p-5 bg-white shadow-md rounded-lg">
          <FaPhoneAlt className="text-green-500 text-3xl" />
          <div>
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-gray-600">+8801703344405</p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center gap-4 p-5 bg-white shadow-md rounded-lg">
          <FaWhatsapp className="text-green-500 text-3xl" />
          <div>
            <h2 className="text-xl font-semibold">WhatsApp</h2>
            <p className="text-gray-600">+8801774999298</p>
          </div>
        </div>

        {/* Facebook */}
        <div className="flex items-center gap-4 p-5 bg-white shadow-md rounded-lg">
          <FaFacebook className="text-blue-600 text-3xl" />
          <div>
            <h2 className="text-xl font-semibold">Facebook</h2>
            <a href="https://www.facebook.com/radoan.ahmed.585" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Radoan Ahmed</a>
          </div>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-4 p-5 bg-white shadow-md rounded-lg">
          <FaInstagram className="text-pink-500 text-3xl" />
          <div>
            <h2 className="text-xl font-semibold">Instagram</h2>
            <a href="https://www.instagram.com/myselfradoan/" className="text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">Radoan Ahmed</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
