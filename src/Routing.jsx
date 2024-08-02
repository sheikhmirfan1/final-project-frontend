import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import {StickyNavbar} from "./components/Navbar.jsx";
import OrderPage from "./orderform/OrderPage.jsx";
import ContactUs from "./contactUs/contactUs.jsx";
import About from "./About/aboutUs.jsx";
import {SimpleRegistrationForm} from "./components/Reservation/booking.jsx";

const Routing = () => {
  return (
    <>
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/Reservation" element={<SimpleRegistrationForm />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUS" element={<About />} />

        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </>
  );
};

export default Routing;