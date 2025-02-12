import BookCategories from "../components/BookCategories";
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";
import FeaturedBooks from "../components/FeaturedBooks";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Slider></Slider>



      <BookCategories></BookCategories>


      <div className="my-10">
      <FeaturedBooks></FeaturedBooks>
      </div>



      <Testimonials></Testimonials>
      <div className="max-w-7xl mx-auto mt-10">
        <FAQ></FAQ>
      </div>


      <div className="max-w-7xl mx-auto">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;