import "./styles/style.css";
// import basket from "../public/basket-images.png";
const Header = () => {
  return (
    <div className="header">
      <h1 className="shopName">Intocode Coding Shopcamp</h1>
      <div className="logo">
        <img
          src="https://www.maam.ru/illustrations/33/medium/item_340.jpg"
          alt="basket"
        />
      </div>
    </div>
  );
};

export default Header;
