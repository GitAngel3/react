import React, { useState } from "react";

function FavoriteFoods() {
  // List of foods
  const foods = ["Pizza", "Burger", "Ice Cream", "Pasta", "Biryani"];

  // State for message
  const [message, setMessage] = useState("Select a food that you love!");

  // Function to update message
  const handleClick = (food) => {
    setMessage(`I love ${food}!`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Select a food that you love!</h2>

      {/* Food List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {foods.map((food, index) => (
          <li key={index} style={{ margin: "10px" }}>
            {food}{" "}
            <button onClick={() => handleClick(food)}>
              Love this
            </button>
          </li>
        ))}
      </ul>

      {/* Message Display */}
      <h3>{message}</h3>
    </div>
  );
}

export default FavoriteFoods;