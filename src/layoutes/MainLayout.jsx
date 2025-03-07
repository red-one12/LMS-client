import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar></Navbar>

      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>

      <Footer></Footer>
      
    </div>
  );
};

export default MainLayout;