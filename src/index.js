import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const snacksMenuData = [
  {
    name: "Sushi Rolls",
    ingredients:
      "Rice, seaweed, various fillings (e.g., fish, vegetables), and condiments like soy sauce and wasabi",
    price: 16,
    photoName: "menu/sushi_rolls.jpeg",
    soldOut: false,
  },
  {
    name: "Pizza Quattro Formaggi",
    ingredients:
      "Tomato, mozzarella, gorgonzola, parmesan, and provolone cheeses",
    price: 14,
    photoName: "menu/quattro_formaggi.jpeg",
    soldOut: false,
  },
  {
    name: "Cheese Platter",
    ingredients: " Assortment of cheeses, crackers, fruits, and nuts",
    price: 20,
    photoName: "menu/cheese_platter.jpeg",
    soldOut: false,
  },
  {
    name: "Caprese Salad",
    ingredients:
      " Fresh tomatoes, mozzarella cheese, basil, olive oil, and balsamic glaze",
    price: 10,
    photoName: "menu/caprese_salad.jpeg",
    soldOut: false,
  },
  {
    name: "Bruschetta",
    ingredients:
      "Toasted bread topped with diced tomatoes, garlic, basil, and olive oil",
    price: 8,
    photoName: "menu/bruschetta.jpeg",
    soldOut: false,
  },
  {
    name: "Nachos",
    ingredients: "Corn tortilla chips with melted cheese, jalapeños, and salsa",
    price: 10,
    photoName: "menu/nachos.jpeg",
    soldOut: true,
  },
  {
    name: "Hummus and Pita Bread",
    ingredients: "Chickpea-based hummus with soft pita bread",
    price: 7,
    photoName: "menu/hummus_pita.jpeg",
    soldOut: false,
  },
  {
    name: "Suffed Bell Peppers",
    ingredients:
      "Bell peppers stuffed with a mixture of rice, ground meat, and vegetables",
    price: 14,
    photoName: "menu/suffed_bell_peppers.jpeg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "menu/margherita.jpeg",
    soldOut: false,
  },
  {
    name: "Garlic Bread",
    ingredients: "Bread with garlic and butter",
    price: 5,
    photoName: "menu/garlic_bread.jpeg",
    soldOut: false,
  },
];


const Menu = () => {
  const snacksData = snacksMenuData;
  // const snacksData = [];
  const numPizza = snacksData.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>Authentic Italian cuisine. 10 creative dishes to choose from .All from our stone oven. all organic, all delicious.</p>
        <ul className="snacks">
          {snacksData.map((snacks) => (
            <Snacks
              snacksDataObj={snacks}
              key={snacks.name}
              // name={snacks.name}
              // ingredients={snacks.ingredients}
              // price={snacks.price}
              // photoName={snacks.photoName}
            />
          ))}
        </ul>
        </>
      ) : (
        <p>We are still working on our menu please come back later :)</p>
      )}
    </div>
  );
};
function Snacks({ snacksDataObj }) {
  console.log(snacksDataObj);
  // if (snacksDataObj.soldOut) return null;
  return (
    <li className={`snacks ${snacksDataObj.soldOut ? ' sold-out' : ""}`}>
      <img src={snacksDataObj.photoName} alt={snacksDataObj.name} />
      <div>
        <h3>{snacksDataObj.name}</h3>
        <p>{snacksDataObj.ingredients}</p>
        <span>{`${snacksDataObj.soldOut ? "SOLD OUT " : snacksDataObj.price + 3 }$`}</span>
      </div>
    </li>
  );
}
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const Header = () => {
  // const style = {fontSize:'35px',color:'orange',textTransform:"uppercase"}
  return (
    <div className="header">
      <h1>Fast React Snacks Co.</h1>
    </div>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 10;
  const closeHour = 22;
  // if(hour >= openHour &&  hour <= closeHour ){
  //   alert("Welcome! Open ")
  // } else{
  //   alert("Sorry,Closed") }
   
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <div>
      <footer className="footer">
        {/* {isOpen===true?"We are currently open.":"Sorry Closed."}  */}
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            We are Happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )}
      </footer>
    </div>
  );
};
const Order = ({openHour,closeHour}) => {
  return (
    <>
      <div className="order">
        <p>
          We're open from {openHour}:00 to {closeHour}:00. Please come visit us or order
          online.
        </p>
        <button className="btn">
          Order
        </button>
      </div>
    </>
  );
};
//   return React.createElement('footer', null , `${new Date().toLocaleTimeString()} We're currently open.`) // instead of this

const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
