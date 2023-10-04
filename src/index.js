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
    soldOut: false,
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
function Snacks(props) {
  return (
    <li className="snacks">
      <img src={props.snacksDataObj.photoName} alt={props.snacksDataObj.name} />
      <div>
        <h3>{props.snacksDataObj.name}</h3>
        <p>{props.snacksDataObj.ingredients}</p>
        <span>{`${props.snacksDataObj.price + 3}$`}</span>
      </div>
    </li>
  );
}
const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <ul className="snacks">
        {snacksMenuData.map((snacks) => (
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
  //   alert("Sorry,Closed")
  // }
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <div>
      <footer className="footer">
        {new Date().toLocaleTimeString()} We are currently open.
      </footer>
    </div>
  );
  //   return React.createElement('footer', null , `${new Date().toLocaleTimeString()} We're currently open.`) // instead of this
};

const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
