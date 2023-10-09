import PrimaryNavbar from "./components/PrimaryNavbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Profile from "./components/personalDetails";
import UserDashboardLayout from "./components/UserDashboardLayout";
import Addresses from "./components/Addresses";
import "./index.css";
import CategoryResult from "./components/CategoryResult";
import ShippingDeliveryPickup from "./components/shippingDeliveryPickup";
import ReturnExchange from "./components/ReturnExchange";
import PriceGuarantee from "./components/PriceGuarantee";
import ProductRecalls from "./components/ProductRecalls";
import SupportCenter from "./components/SupportCenter";
import Services from "./components/Services";
import HaulRecycling from "./components/HaulRecycling";
import ContactUs from "./components/ContactUs";
import AffilateProgram from "./components/AffilateProgram";
import Developers from "./components/Developers";
import Health from "./components/Health";
import Education from "./components/Education";

function App() {
  return (
    <>
      <PrimaryNavbar />
      {/* <SecondaryNavbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/dashboard" element={<UserDashboardLayout />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="addresses" element={<Addresses />} />
        </Route>
        <Route path="/search" element={<Search />} />
        <Route path="/category/:category" element={<CategoryResult />} />
        <Route
          path="/shipping-delivery-pickup"
          element={<ShippingDeliveryPickup />}
        ></Route>
        <Route path="/return-exchange" element={<ReturnExchange />}></Route>
        <Route path="/price-guarantee" element={<PriceGuarantee />}></Route>
        <Route path="/product-recalls" element={<ProductRecalls />}></Route>
        <Route path="/support-center" element={<SupportCenter />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/haul-recycling" element={<HaulRecycling />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/affilate-program" element={<AffilateProgram />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route path="/developers" element={<Developers />}></Route>
        <Route path="/education" element={<Education />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
