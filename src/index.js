import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Snacks />
      <Snacks />
      <Snacks />
      <Snacks />
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
  // return React.createElement('footer', null , `${new Date().toLocaleTimeString()} We're currently open.`) // instead of this
};
function Snacks() {
  return (
    <div>
      <img
        src="menu/garlic_bread.jpeg"
        alt="Garlic Bread"
        width={200}
        height={200}
      />
      <h3>Garlic Bread</h3>
      <p>Bread with garlic and butter</p>
    </div>
  );
}
const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
