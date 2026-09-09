// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Product from './pages/Product';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import AllProducts from "./pages/AllProducts";
// import Cart from "./pages/Cart";
// import { CartProvider } from "./context/CartContext";




// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/all-products" element={<AllProducts />} />
//             <Route path="/products" element={<Product />} />
//             <Route path="/cart" element={<Cart />} /> {/* ✅ new route */}
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Product from './pages/Product';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import AllProducts from "./pages/AllProducts";
// import Cart from "./pages/Cart";
// import { CartProvider } from "./context/CartContext";

// function App() {
//   return (
//     <CartProvider> {/* ✅ wrap everything inside */}
//       <Router>
//         <Navbar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/product" element={<Product />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/all-products" element={<AllProducts />} />
//             <Route path="/products" element={<Product />} />
//             <Route path="/cart" element={<Cart />} /> {/* ✅ Cart route */}
//           </Routes>
//         </div>
//         <Footer />
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
// import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/all-products" element={<AllProducts />} /> */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
