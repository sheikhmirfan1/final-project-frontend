import { Routes,Route } from "react-router-dom";
import Home from "./Home.jsx";
import NavBar from "./components/Navbar.jsx";

const Routing = () => {
    return (
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </NavBar>
    );
    }

export default Routing