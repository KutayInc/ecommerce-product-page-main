import Header from "./components/Header";
import "./App.css";
import ProductImg from "./components/Product-img";
import ProductInfo from "./components/Product-info";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const price = 125;
  const [cart, setCart] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  function toggle() {
    setShowMenu(!showMenu);
    console.log(showMenu);
  }

  return (
    <div className="mb-12 w-full md:container mx-auto">
      <Nav showMenu={showMenu} toggle={toggle} />
      <Header cart={cart} setCart={setCart} price={price} toggle={toggle} />
      <hr className="hidden md:block" />
      <div className="flex flex-col md:grid grid-cols-2 md:mx-14 md:my-24 justify-between">
        <ProductImg />
        <ProductInfo
          count={count}
          setCount={setCount}
          cart={cart}
          setCart={setCart}
          price={price}
        />
      </div>
    </div>
  );
}

export default App;
