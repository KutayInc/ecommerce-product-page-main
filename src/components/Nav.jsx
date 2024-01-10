import close from "../../images/icon-close.svg";

function Nav(props) {
  return (
    <div
      className={
        props.showMenu
          ? "w-screen h-screen absolute top-0 left-0 flex z-50"
          : "hidden"
      }
    >
      <div className="h-full w-3/4 bg-white p-5 flex flex-col">
        <div>
          <div className="pb-10" onClick={props.toggle}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#000"
              />
            </svg>
          </div>
          <p className="my-3 font-bold text-lg">Collections</p>
          <p className="my-3 font-bold text-lg">Men</p>
          <p className="my-3 font-bold text-lg">Women</p>
          <p className="my-3 font-bold text-lg">About</p>
          <p className="my-3 font-bold text-lg">Contact</p>
        </div>
      </div>
      <div className="w-1/4 h-full bg-black opacity-50"></div>
    </div>
  );
}

export default Nav;
