import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
import Carts from "../UI/cart/Carts.jsx";
import Testimonial from "../Testimonial/Testimonial.jsx"
import { useSelector } from "react-redux";
import SignUpForm from "../../pages/Signup.jsx";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <Header />
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
      <Testimonial />
      <SignUpForm />
      <Footer />

    </div>
  );
};

export default Layout;
