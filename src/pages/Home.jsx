import BookCategories from "../components/BookCategories";
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
    </div>
  );
};

export default Home;