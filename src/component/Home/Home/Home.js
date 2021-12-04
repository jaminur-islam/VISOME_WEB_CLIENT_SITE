import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import PayCart from "../PayCart/PayCart";
import Navbar from "../Shared/Navbar/Navbar";
import Started from "../Started/Started";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar> </Navbar>
      <Banner> </Banner>
      <Started> </Started>
      <About></About>
      <PayCart></PayCart>
      <Testimonials> </Testimonials>
      <Contact> </Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
