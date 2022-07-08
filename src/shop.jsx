const products = [
  {
    id: 1,
    name: "MacBook",
    price: 100000,
    left: 31,
    image: "http://intocode.ru/d/react-project-1/images/1.jpg",
  },
  {
    id: 2,
    name: "Galaxy",
    price: 35999,
    left: 11,
    image: "http://intocode.ru/d/react-project-1/images/2.jpg",
  },
  {
    id: 3,
    name: "Скутер",
    price: 65500,
    left: 0,
    image: "http://intocode.ru/d/react-project-1/images/3.jpg",
  },
  {
    id: 4,
    name: "Монитор Samsung",
    price: 12000,
    left: 7,
    image: "http://intocode.ru/d/react-project-1/images/4.jpg",
  },
  {
    id: 5,
    name: "Респераторная маска",
    price: 500,
    left: 24,
    image: "http://intocode.ru/d/react-project-1/images/5.jpg",
  },
  {
    id: 6,
    name: "Стиральная машина",
    price: 100000,
    left: 0,
    image: "http://intocode.ru/d/react-project-1/images/6.jpg",
  },
  {
    id: 7,
    name: "Белый холодильник",
    price: 43100,
    left: 18,
    image: "http://intocode.ru/d/react-project-1/images/7.jpg",
  },
  {
    id: 8,
    name: "Колонка",
    price: 3000,
    left: 1,
    image: "http://intocode.ru/d/react-project-1/images/8.jpg",
  },
  {
    id: 9,
    name: "Наушники",
    price: 1500,
    left: 5,
    image: "http://intocode.ru/d/react-project-1/images/9.jpg",
  },
];

const Shop = () => {
  return (
    <div className="shopBox">
      <div className="navbar">
        <a href="">Гаджеты и аксессуары</a>
        <a href="">Бытовая техника</a>
        <a href="">Прочее</a>
      </div>
      <div className="product">
        {products.map((el) => {
          return (
            <div className="card">
              <img src={el.image} alt="img" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">цена {el.price}</p>
                <p className="card-left">количество на складе {el.left}</p>
                <a href="#" className="btn btn-primary">
                  Добавить в корзину
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
