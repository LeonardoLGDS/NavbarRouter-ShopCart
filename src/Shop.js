import React, { useState, useEffect } from "react";

export default function Shop(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortniteapi.io/v2/items/upcoming?lang=en",
      { headers: { Authorization: "16d2141e-93eb51ba-70d293d4-7c9b9f5e" } }
    );
    const items = await data.json();
    console.log(item);
    setItem(items.items);
  };
  const rarityColor = (rarity) => {
    if (rarity === "Epic") {
      return "purple";
    } else if (rarity === "RARE") {
      return "red";
    } else return "#949400";
  };
  return (
    <div>
      <h1>Shop Page</h1>
      <div className="items">
        {item.map((ele) => (
          <div key={ele.id} className="item">
            <div>Name: {ele.name}</div>
            <div>Type: {ele.type.name}</div>
            <div>
              Rarity:{" "}
              <span
                style={{
                  color: rarityColor(ele.rarity.name)
                }}
              >
                {ele.rarity.name.toUpperCase()}
              </span>
            </div>
            <div className="imagePanel">
              <button
                value={ele.id}
                onClick={props.subtrtQnt}
                className="imageButtons"
              >
                -
              </button>
              <span className="imageButtons">{props.itemsQnt[ele.id]}</span>
              <button
                value={ele.id}
                onClick={props.addQnt}
                className="imageButtons"
              >
                +
              </button>
            </div>
            <div className="myDiv">
              <img
                src={ele.images.full_background}
                alt={ele.name}
                style={{ pointerEvents: "all" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
