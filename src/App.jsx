import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ProductDetails from "./pages/product/ProductDetails";
import BaseLayout from "./layouts/BaseLayout";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from "./layouts/AuthLayout";
import Login from "./auth/login";
import Register from "./auth/register";
import CartPage from "./pages/cart/CartPage";
import Billing from "./pages/billing/Billing";
import TrackOrder from "./pages/billing/TrackOrder";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route element={<BaseLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/products" element={<Product />} />
          <Route path="/category/:id" element={<Category />} />
          </Route>
          <Route element={<AuthLayout/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
