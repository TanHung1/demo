import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../Style/Edit.css";
const EditShoe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [shoe, setShoe] = useState({
    name: "",
    shortdescription: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3030/data_shoes/${id}`).then((response) => {
      setShoe(response.data);
    });
  }, [id]);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setShoe({
      ...shoe,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3030/data_shoes/${id}`, shoe)
      .then(() => {
        navigate("/"); //chuyển về trang danh sách sản phẩm sau khi cập nhật thành công
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="form-edit">
      <h2>Cập nhật sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Tên Sản phẩm</label>
          <input
            type="text"
            name="name"
            value={shoe.name}
            onChange={handleInputChange}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Description</label>
          <textarea
            type="text"
            name="shortdescription"
            value={shoe.shortdescription}
            onChange={handleInputChange}
            class="form-control"
            id="exampleFormControlInput1"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Giá</label>
          <input
            type="text"
            name="price"
            value={shoe.price}
            onChange={handleInputChange}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Hình ảnh</label>
          <input
            type="text"
            name="image"
            value={shoe.image}
            onChange={handleInputChange}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Cập nhật
        </button>
      </form>
    </div>
  );
};

export default EditShoe;
