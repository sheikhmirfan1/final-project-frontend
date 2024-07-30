import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import NavBar from "./components/Navbar.jsx";
import OrderPage from "./orderform/OrderPage.jsx";
import ContactUs from "./contactUs/contactUs.jsx";

const Routing = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </>
  );
};

export default Routing;