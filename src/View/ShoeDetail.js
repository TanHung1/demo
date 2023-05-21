import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShoeDetail = () => {
  const [shoe, setShoe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3030/data_shoes/${id}`).then((response) => {
      setShoe(response.data);
    });
  }, [id]);

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <h3>{shoe.name}</h3>

      <p>{shoe.description}</p>
      <p>Giá: {shoe.price}đ</p>
      <img src={shoe.image} alt={shoe.name} />
    </div>
  );
};

export default ShoeDetail;
