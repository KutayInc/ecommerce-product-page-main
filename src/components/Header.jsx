import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import productthumbnail from "../../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../images/icon-delete.svg";
import menu from "../../images/icon-menu.svg";
import { useState } from "react";

function Cart(props) {
  return (
    <div
      className="w-88  z-40 mx-5 md:w-96 h-60 absolute top-14 -left-72 bg-white md:-left-36 md:top-20 shadow-lg rounded-xl"
      onMouseLeave={() => props.toggle(false)}
    >
      <h1 className="text font-bold ml-5 my-5">Cart</h1>
      <hr />
      <div className="flex items-center justify-center h-3/4">
        {props.cart ? (
          <div className="flex flex-col m-3">
            <div className="flex h-1/2 mb-3 items-center justify-center">
              <img
                src={productthumbnail}
                className="h-full w-1/5 rounded-lg mr-2"
                alt=""
              />
              <div>
                <p className="text-darkGrayishBlue">
                  Fall Limited Edition Sneakers{" "}
                </p>
                <p className="text-darkGrayishBlue">
                  ${props.price}.00 x {props.cart}
                  <span className="font-bold ml-3 text-black">
                    ${props.price * props.cart}.00
                  </span>
                </p>
              </div>
              <img
                src={deleteIcon}
                onClick={() => props.setCart(0)}
                className="h-1/2 w-4 ml-2 cursor-pointer"
                alt=""
              />
            </div>
            <button
              className="mt-3 w-full h-12 bg-orange text-white 
            flex items-center justify-center rounded-xl drop-shadow-md
             shadow-orange hover:bg-orangeHover"
            >
              Checkout
            </button>
          </div>
        ) : (
          <p className="font-bold">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

function Header(props) {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="flex w-full items-center justify-between h-14 md:h-28">
      <div className="flex h-full items-center">
        <div className="md:hidden mx-5" onClick={props.toggle}>
          <img src={menu} alt="" />
        </div>
        <div className="mr-10">
          <img src={logo} alt="" />
        </div>
        <div className="hidden md:flex h-full items-center">
          <div className="hover:border-b-4 border-orange  h-full flex items-center cursor-pointer">
            <p className="mx-5 text-darkGrayishBlue cursor-pointer hover:text-black">
              Collections
            </p>
          </div>
          <div className="hover:border-b-4 border-orange h-full flex items-center cursor-pointer">
            <p className="mx-5 text-darkGrayishBlue cursor-pointer hover:text-black">
              Men
            </p>
          </div>
          <div className="hover:border-b-4 border-orange h-full flex items-center cursor-pointer">
            <p className="mx-5 text-darkGrayishBlue cursor-pointer hover:text-black">
              Women
            </p>
          </div>
          <div className="hover:border-b-4 border-orange h-full flex items-center cursor-pointer">
            <p className="mx-5 text-darkGrayishBlue cursor-pointer hover:text-black">
              About
            </p>
          </div>
          <div className="hover:border-b-4 border-orange h-full flex items-center cursor-pointer">
            <p className="mx-5 text-darkGrayishBlue cursor-pointer hover:text-black">
              Contact
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-4 ">
        <div
          className="px-2 md:px-7 h-full md:pb-12 md:mt-6 md:pt-6 relative"
          onMouseEnter={() => setShowCart(true)}
          onMouseLeave={() => setShowCart(false)}
        >
          <img src={cart} className="relative cursor-pointer" alt="" />
          {showCart ? (
            <Cart
              cart={props.cart}
              setCart={props.setCart}
              price={props.price}
              toggle={setShowCart}
            />
          ) : (
            ""
          )}
          {props.cart ? (
            <div className="absolute -top-2 right-0 md:top-3 md:right-3.5 bg-orange w-5 h-4 md:w-6 md:h-5 text-xs md:text-sm text-center rounded-xl text-white">
              {props.cart}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="ml-3 md:ml-7 hover:border-2 border-orange rounded-full">
          <img src={avatar} alt="" className="h-7 md:h-14" />
        </div>
      </div>
    </div>
  );
}

export default Header;
