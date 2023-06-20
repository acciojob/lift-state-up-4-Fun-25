import React, { useState } from "react";
import "./../styles/App.css";
import Child from "./Child";
const App = () => {
 const [cartItems, setCartItems] = useState([]);
 const [litem, setLitem] = useState("");
 const [lprice, setLprice] = useState(0);
 const [add, setAdd] = useState(false);

 function handleClick() {
   setAdd(true);
   setCartItems([...cartItems, { item: litem, price: lprice }]);
 }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <label>Input Name</label>
      <input type="text" onChange={(e) => setLitem(e.target.value)} />
      <label>Item Price</label>
      <input type="number" onChange={(e) => setLprice(e.target.value)} />
      <button onClick={() => handleClick()}>Add Item</button>
      <div>
        <Child
          list={cartItems}
          setList={setCartItems}
          addToList={add}
          setaddToList={setAdd}
        ></Child>
      </div>
    </div>
  );
};

export default App;
