import React from "react";

function Child({ list, setList, addToList, setaddToList, renderList }) {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <ul>
        {list.map((lisItem, index) => (
          <div key={index}>
            <span id="itemName">{lisItem.item}</span>
            <span id="itemPrice">{lisItem.price}</span>
            <button onClick={() => setList(list.filter((_, i) => i !== index))}>
              Remove
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Child;
