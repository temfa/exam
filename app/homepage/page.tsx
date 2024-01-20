import Design from "@/components/design";
import FeaturedProducts from "@/components/featuredProducts";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Posts from "@/components/posts";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Header />
      <Gallery />
      <FeaturedProducts />
      <Services />
      <Posts />
      <Testimonials />
      <Design />
      <Footer />
    </>
  );
};

export default HomePage;
