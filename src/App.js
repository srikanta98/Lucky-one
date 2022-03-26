import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card/Card";
import Navbar from "./Navbar/Navbar";
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";

Modal.setAppElement("#root");

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
 

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
      {/* <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
        <button className='modal-close-button' onClick={closeModal}>
          <CgCloseR size={25} />
        </button>
        {cart.length === 0 && (
          <div className='cart-warning'>
            <p> Cart is empty </p>
          </div>
        )} */}
        
      <h1>srikanth</h1>
    </div>
  );
}

export default App;