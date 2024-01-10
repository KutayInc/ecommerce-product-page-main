import cart from "../../images/icon-cart-white.svg";
import plus from "../../images/icon-plus.svg";
import minus from "../../images/icon-minus.svg";

function ProductInfo(props) {
  function addCart() {
    props.setCart((prev) => prev + props.count);
    props.setCount(1);
  }

  return (
    <div className="flex flex-col mx-7 md:mx-12 justify-center  md:pr-12">
      <div>
        <h3 className="text-orange font-bold my-3">Sneaker Company</h3>
      </div>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold md:my-3">
          Fall Limited Edition Sneakers
        </h1>
      </div>
      <div>
        <p className="text-darkGrayishBlue my-3 text-sm md:my-5">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="flex md:flex-col items-center md:items-start justify-between mb-5">
        <div className="flex items-center md:mb-1">
          <h2 className="text-2xl font-bold mr-5">${props.price}.00</h2>
          <div className="bg-paleOrange py-0.5 px-2.5 rounded-lg text-orange font-bold">
            50%
          </div>
        </div>
        <div className="md:mb-10">
          <h4 className="text-grayishBlue line-through font-bold">
            ${props.price * 2}.00
          </h4>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:h-14">
        <div className="grid grid-cols-3 h-12 md:h-full place-items-center justify-around w-full md:w-2/5 bg-lightGrayishBlue md:mr-5 rounded-xl mb-3">
          <div
            className="h-full w-full flex items-center justify-center cursor-pointer hover:opacity-60"
            onClick={() => props.setCount((prev) => (prev > 0 ? prev - 1 : 0))}
          >
            <img src={minus} className="select-none" alt="" />
          </div>
          <div className="h-full w-full flex items-center justify-center font-bold select-none">
            {props.count}
          </div>
          <div
            className="h-full w-full flex items-center justify-center cursor-pointer select-none hover:opacity-60"
            onClick={() => props.setCount((prev) => prev + 1)}
          >
            <img src={plus} alt="" />
          </div>
        </div>
        <button
          className="w-full h-12 md:h-full md:w-3/5 bg-orange text-white flex items-center 
        justify-center rounded-xl drop-shadow-md shadow-orange
         hover:bg-orangeHover select-none"
          onClick={addCart}
        >
          <img src={cart} alt="" className="pr-6" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;

/*
  



  These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.

  $125.00
  50%
 

 
  
  */
