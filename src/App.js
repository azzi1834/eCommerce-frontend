import PrimaryNavbar from "./components/PrimaryNavbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <PrimaryNavbar />
      <SecondaryNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
