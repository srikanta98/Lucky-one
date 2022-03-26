import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card/Card";


import { CgCloseR } from "react-icons/cg";



function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  
 

  const handleAddToCart = (boy) => {
    const newCart = [...cart, boy];
    setCart(newCart);
  };
  const handleAddToCarti = () => {
    const newCart = [];
    setCart(newCart);
  };
  
  
 

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    
    <div className='shop-container'>
      
      
      
      <div className='products-container'>
        <h1 className="pip">Watch shop</h1>
        <h1 className="pap">Best products of alltime</h1>
        
        {guns.map((gun) => (
          <Card gun={gun} key={gun.id} handleAddToCart={handleAddToCart} />
        ))}
        
      </div>
      <div className="cart-container">
        <h1>Seleted Items</h1>
       {cart.map((item) => (
          <h1>Name: {item.name}</h1>
        ))}
        <div className="pop">
        <button onClick={handleAddToCarti} className='btn-cart pop'>
        <p className='btn-text'>Delete</p>
        </button>
        <button className='btn-cart'>
        <p className='btn-text'>Random</p>
        </button>
        </div>
      </div>
  
        
     <div className="first">
       <h1>How react works?</h1>
       <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.Thats why this is really useful to programmar.Maily react goes to its virtual Dom,and see what's mainly changed in it's dom and it creates a changed list and send it to actual dom.So react does fancy updates.</p>
       <div className="second">
       <h1>How Usestate works?</h1>
       <p> React is a declarative, efficient, and flexible JavaScript library for building user interfaces.useState is a hook.we can have state variables in fuctional components in those state.basically react keeps track of state variable and ensure they stay up to date for the component</p>
       </div>
     </div>
    
    </div>
  );
}

export default App;