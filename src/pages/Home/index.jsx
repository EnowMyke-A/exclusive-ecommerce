import React from "react";
import Hero from "../../components/hero";
import Headings from "../../components/section_heading";
import ProductCard from "../../components/common/productCard";
import SpecialDeal from "../../components/special_deal";
import ServiceQuality from "../../components/service_quality";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="product-display-section">
        <Headings />
        <ProductCard />
      </div>
      <div className="product-display-section">
        <Headings />
        <ProductCard />
      </div>
      <div className="product-display-section">
        <Headings />
        <ProductCard />
      </div>
      <SpecialDeal />
      <div className="product-display-section">
        <Headings />
      </div>
      <ServiceQuality />
    </>
  );
};

export default Home;
