import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import CartData from "./components/CartData";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartDetail from "./components/CartDetail";
import YourCarts from "./components/YourCarts";
import { Empty } from "./components/Empty";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/cartdetail" element={<CartDetail />} />
        <Route path="/yourcarts" element={<YourCarts />} />
        <Route path="/empty" element={<Empty />} />
      </Routes>
    </div>
  );
}

export default App;
