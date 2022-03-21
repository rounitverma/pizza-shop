import React from "react";
import CartCountButton from "../../components/common/CartCountButton";
import Footer from "../../components/common/Footer";
import Menu from "../../components/common/Menu";
import Banner from "../../components/Home/Banner";

function Home() {
  return (
    <div>
      <Banner />
      <Menu />
      <Footer />
      <CartCountButton />
    </div>
  );
}

export default Home;
