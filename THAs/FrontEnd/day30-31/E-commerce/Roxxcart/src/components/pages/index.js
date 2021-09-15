import React from "react";
import Footer from "../Footer/Footer";
import  NewsLetter  from "../NewLetter/NewLetter";
import CarouselComponent from '../Carousel/Carousel'
const Home = () => {
  return (
    <section>
      <CarouselComponent />
      <NewsLetter />
      <Footer />
    </section>
  );
  
};

export default Home;
