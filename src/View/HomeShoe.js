import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style/HomeShoe.css";

function HomeShoe() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/data_shoes")
      .then((res) => setShoes(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="cards">
        {shoes.map((shoe) => (
          <div key={shoe.id}>
            <div className="card">
              <img src={shoe.image} alt={shoe.image} style={{ width: "50%" }} />
              <div className="card-body">
                <h5 className="card-title">{shoe.name}</h5>
                <h5 className="card-title">{shoe.shortdescription}</h5>
                <p className="card-text">{shoe.price} $</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeShoe;
