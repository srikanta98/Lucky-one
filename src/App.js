import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card/Card";


import { CgCloseR } from "react-icons/cg";



function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [deletecart, setDelete] = useState([]);
 

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
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
        
       {cart.map((item) => (
          <h1>Name: {item.name}</h1>
        ))}
        <div className="pop">
        <button className='btn-cart pop'>
        <p className='btn-text'>Random</p>
        </button>
        <button className='btn-cart'>
        <p className='btn-text'>Delete</p>
        </button>
        </div>
      </div>
  
        
     <div className="first">
       <h1>How react works?</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore veniam animi obcaecati quasi dolorem inventore! Minus quas atque exercitationem amet.</p>
       <div className="second">
       <h1>Usestate vs prop?</h1>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quaerat molestiae necessitatibus maxime quos suscipit laboriosam nostrum a, incidunt quidem.</p>
       </div>
     </div>
    
    </div>
  );
}

export default App;