import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { Register } from "./components/Register";
import { SingleBook } from "./components/SingleBook";
import { Dashboard } from "./components/dashBoard/Dashboard";
import Managed from "./components/dashBoard/Managed";
import Upload from "./components/dashBoard/Upload";

function Main() {
  const location = useLocation();
  const hideroutes = ["/login", "/register"];

  return (
    <>
      {/* Set as Default Tag for all Pages */}
      {!hideroutes.includes(location.pathname) && <Navbar />}
      {/* Project Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book/:id" element={<SingleBook />} />
        <Route path="/admin/dashboard" element={<Dashboard />}>
          <Route path="/admin/dashboard/manage" element={<Managed />} />
          <Route path="/admin/dashboard/upload" element={<Upload />} />
        </Route>
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <>
      <Router>
        <Main />
      </Router>
    </>
  );
};
export default App;
