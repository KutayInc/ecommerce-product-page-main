import product1 from "../../images/image-product-1.jpg";
import product2 from "../../images/image-product-2.jpg";
import product3 from "../../images/image-product-3.jpg";
import product4 from "../../images/image-product-4.jpg";
import product1thumbnail from "../../images/image-product-1-thumbnail.jpg";
import product2thumbnail from "../../images/image-product-2-thumbnail.jpg";
import product3thumbnail from "../../images/image-product-3-thumbnail.jpg";
import product4thumbnail from "../../images/image-product-4-thumbnail.jpg";
import close from "../../images/icon-close.svg";
import closeOrange from "../../images/icon-close-orange.svg";
import { useState } from "react";

function ProductImg() {
  const [active, setActive] = useState(1);
  const [lightBoxActive, setLightBoxActive] = useState(active);
  const [showLightBox, setShowLightBox] = useState(false);

  function handleClick(index) {
    setActive(index);
    setLightBoxActive(index);
  }

  function closeLightbox() {
    setShowLightBox(false);
    setLightBoxActive(active);
  }

  function setImage() {
    if (active === 1 || active === null) {
      return product1;
    } else if (active === 2) {
      return product2;
    } else if (active === 3) {
      return product3;
    } else if (active === 4) {
      return product4;
    }
  }

  function setLightBoxImage() {
    if (lightBoxActive === 1 || lightBoxActive === null) {
      return product1;
    } else if (lightBoxActive === 2) {
      return product2;
    } else if (lightBoxActive === 3) {
      return product3;
    } else if (lightBoxActive === 4) {
      return product4;
    }
  }

  function arrowHandler(direction) {
    if (direction === "next") {
      setLightBoxActive((prev) => (prev === 4 ? 1 : prev + 1));
    } else if (direction === "previous") {
      setLightBoxActive((prev) => (prev === 1 ? 4 : prev - 1));
    }
  }

  function mobileArrowHandler(direction) {
    if (direction === "next") {
      setActive((prev) => (prev === 4 ? 1 : prev + 1));
    } else if (direction === "previous") {
      setActive((prev) => (prev === 1 ? 4 : prev - 1));
    }
  }

  function lightBox() {
    return (
      <div className="hidden fixed top-0 left-0 w-full h-full z-10 md:flex flex-col justify-center items-center">
        <div
          className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-75"
          onClick={closeLightbox}
        ></div>
        <div className="container w-4/12 mx-auto flex flex-col items-center my-10 z-20">
          <div className="flex justify-end w-full relative">
            <img
              src={close}
              onMouseEnter={(e) => (e.currentTarget.src = closeOrange)}
              onMouseLeave={(e) => (e.currentTarget.src = close)}
              alt=""
              onClick={closeLightbox}
              className="w-5 cursor-pointer"
            />
          </div>

          <div className=" relative mt-7 flex items-center">
            <div
              className="h-14 w-14 rounded-full bg-white select-none flex items-center
              justify-center absolute -left-7 cursor-pointer"
              onClick={() => arrowHandler("previous")}
            >
              <svg
                width="12"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-black hover:stroke-orange cursor-pointer"
              >
                <path
                  d="M11 1 3 9l8 8"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <img
              src={setLightBoxImage()}
              alt=""
              className="rounded-3xl select-none"
            />
            <div
              className="h-14 w-14 rounded-full  bg-white select-none flex items-center justify-center absolute -right-7 cursor-pointer"
              onClick={() => arrowHandler("next")}
            >
              <svg
                width="13"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-black hover:stroke-orange cursor-pointer"
              >
                <path
                  d="m2 1 8 8-8 8"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-4 my-7 gap-6 w-5/6">
            <div
              className={
                active === 1 ? "border-4 border-orange rounded-3xl" : ""
              }
            >
              <img
                src={product1thumbnail}
                alt=""
                className={
                  active === 1
                    ? "rounded-2xl cursor-pointer"
                    : "rounded-3xl cursor-pointer"
                }
                onClick={() => handleClick(1)}
              />
            </div>

            <div
              className={
                active === 2 ? "border-4 border-orange rounded-3xl" : ""
              }
            >
              <img
                src={product2thumbnail}
                alt=""
                className={
                  active === 2
                    ? "rounded-2xl cursor-pointer"
                    : "rounded-3xl cursor-pointer"
                }
                onClick={() => handleClick(2)}
              />
            </div>
            <div
              className={
                active === 3 ? "border-4 border-orange rounded-3xl" : ""
              }
            >
              <img
                src={product3thumbnail}
                alt=""
                className={
                  active === 3
                    ? "rounded-2xl cursor-pointer"
                    : "rounded-3xl cursor-pointer"
                }
                onClick={() => handleClick(3)}
              />
            </div>
            <div
              className={
                active === 4 ? "border-4 border-orange rounded-3xl" : ""
              }
            >
              <img
                src={product4thumbnail}
                alt=""
                className={
                  active === 4
                    ? "rounded-2xl cursor-pointer"
                    : "rounded-3xl cursor-pointer"
                }
                onClick={() => handleClick(4)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="md:w-4/5 md:mr-12">
      <div className="flex items-center md:block w-full md:rounded-xl">
        <div
          className="h-10 w-10  md:h-14 md:w-14 rounded-full bg-white select-none flex items-center
                    justify-center absolute left-3 md:-left-7 md:hidden"
          onClick={() => mobileArrowHandler("previous")}
        >
          <svg
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-black hover:stroke-orange cursor-pointer"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <img
          src={setImage()}
          alt=""
          className="md:rounded-3xl cursor-pointer"
          onClick={() => setShowLightBox(true)}
        />
        <div
          className="h-10 w-10 md:h-14 md:w-14 rounded-full bg-white select-none flex items-center 
                    justify-center absolute right-3  md:hidden"
          onClick={() => mobileArrowHandler("next")}
        >
          <svg
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-black hover:stroke-orange cursor-pointer"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      {showLightBox && lightBox()}
      <div className="hidden md:grid grid-cols-4 my-7 gap-6">
        <div
          className={active === 1 ? "border-4 border-orange rounded-3xl" : ""}
        >
          <img
            src={product1thumbnail}
            alt=""
            className={
              active === 1
                ? "opacity-35 rounded-2xl hover:opacity-50 cursor-pointer"
                : "rounded-3xl hover:opacity-50 cursor-pointer"
            }
            onClick={() => handleClick(1)}
          />
        </div>

        <div
          className={active === 2 ? "border-4 border-orange rounded-3xl" : ""}
        >
          <img
            src={product2thumbnail}
            alt=""
            className={
              active === 2
                ? "opacity-35 rounded-2xl hover:opacity-50 cursor-pointer"
                : "rounded-3xl hover:opacity-50 cursor-pointer"
            }
            onClick={() => handleClick(2)}
          />
        </div>
        <div
          className={active === 3 ? "border-4 border-orange rounded-3xl" : ""}
        >
          <img
            src={product3thumbnail}
            alt=""
            className={
              active === 3
                ? "opacity-35 rounded-2xl hover:opacity-50 cursor-pointer"
                : "rounded-3xl hover:opacity-50 cursor-pointer"
            }
            onClick={() => handleClick(3)}
          />
        </div>
        <div
          className={active === 4 ? "border-4 border-orange rounded-3xl" : ""}
        >
          <img
            src={product4thumbnail}
            alt=""
            className={
              active === 4
                ? "opacity-35 rounded-2xl hover:opacity-50 cursor-pointer"
                : "rounded-3xl hover:opacity-50 cursor-pointer"
            }
            onClick={() => handleClick(4)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImg;
