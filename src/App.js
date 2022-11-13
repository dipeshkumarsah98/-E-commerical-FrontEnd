import Navbar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import Register from "./components/register/Register";
import Index from "./components/page/Index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
