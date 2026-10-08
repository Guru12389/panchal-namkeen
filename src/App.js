// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Heritage from "./pages/Heritage";
// import Events from "./pages/Events";
// import { CartProvider } from "./context/CartContext";
// import "./App.css";

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <Navbar />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/product" element={<Product />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/heritage" element={<Heritage />} />
//             <Route path="/events" element={<Events />} />
//           </Routes>
//         </main>
//         <Footer />
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;


// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Heritage from "./pages/Heritage";
import Events from "./pages/Events";
import Checkout from "./pages/Checkout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import VerifyBanner from "./components/VerifyBanner";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import MyOrders from "./pages/MyOrders";
import OrderDetail from "./pages/OrderDetail";
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/Dashboard";
import AdminOrders from "./pages/Admin/Orders";
import AdminOrderDetail from "./pages/Admin/OrderDetail";
import AdminCustomers from "./pages/Admin/Customers";
import AdminBankSettings from "./pages/Admin/BankSettings";



import "./App.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <VerifyBanner />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/heritage" element={<Heritage />} />
              <Route path="/events" element={<Events />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/verify-email/:token" element={<VerifyEmail />} />
              <Route path="/my-orders/:id" element={<OrderDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              {/* Auth */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />


              <Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminLayout />
    </AdminRoute>
  }
>
  <Route index element={<AdminDashboard />} />
  <Route path="orders" element={<AdminOrders />} />
  <Route path="orders/:id" element={<AdminOrderDetail />} />
  <Route path="customers" element={<AdminCustomers />} />
  <Route path="bank" element={<AdminBankSettings />} />
</Route>
            </Routes>
          </main>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;