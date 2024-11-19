import About from "../components/About";
import AnimatedPath from "../components/Animation";
import Contact from "../components/Contact";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Greeting from "../components/Greeting";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Services from "../components/Services";
import WCU from "../components/WCU";

const Home = () => {
  return (
    <>
      <div className="overflow-y-scroll scroll-smooth transition-all duration-300 ease-in-out">
        <Greeting />
        <Navbar />
        <Header />
        <About />
        <Services />
        <Courses />
        <Products />
        <WCU />
        <Contact />
        <AnimatedPath />
        <Footer />
      </div>
    </>
  );
};

export default Home;
