import "./styles.css";
import { useState } from "react";
let updatedCart = [];

export default function App() {
  const itemList = ["biriyani", "chicken roast", "chilli chicken", "rasagulla"];
  const [cart, updateCart] = useState(updatedCart);

  const addItem = (text) => {
    console.log(text);
    console.log(cart, "cart here");

    let existOrnot = cart.reduce((acc, cv, index) => {
      if (cv.text === text) {
        return true;
      } else {
        if (acc === true) {
          return true;
        } else {
          return false;
        }
      }
    }, false);
    console.log(existOrnot);
    if (existOrnot) {
      console.log(text, "before updating");
      let index = cart.reduce((acc, cv, index) => {
        if (cv.text === text) {
          return index;
        } else {
          if (acc !== 0) {
            return acc;
          } else {
            return 0;
          }
        }
      }, 0);
      let updatedCart = [...cart];
      updatedCart[index].quantity = updatedCart[index].quantity + 1;
      updateCart(updatedCart);
    } else {
      updatedCart = [...cart, { text, quantity: 1 }];
      updateCart(updatedCart);
    }
  };
  return (
    <div className="App">
      <h1>Simple cart Model</h1>
      <div>
        <ul>
          {itemList.map((item) => (
            <li>
              <p>{item}</p>{" "}
              <button onClick={() => addItem(item)}>Add to cart</button>
            </li>
          ))}
        </ul>

        <div className="flex-H">
          <h3>product</h3>
          <h3>Quantity</h3>
        </div>
        <div className="cart">
          <div>
            <ul>
              {cart.map((item) => (
                <li>{item.text}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {cart.map((item) => (
                <li>{item.quantity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
