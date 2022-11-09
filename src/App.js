import { Navbar } from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import CartList from "./components/common/CartList";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CartList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
