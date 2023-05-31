import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../Style/Edit.css";
function EditShoe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [shoe, setShoe] = useState({
    name: "",
    shortdescription: "",
    price: "",
    image: null, // Thêm thuộc tính image với giá trị ban đầu là null
  });

  useEffect(() => {
    axios.get(`http://localhost:3030/data_shoes/${id}`).then((response) => {
      setShoe(response.data);
      console.log(response);
    });
  }, [id]);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setShoe({
      ...shoe,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setShoe((prevState) => ({ ...prevState, image: reader.result }));
      };
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3030/data_shoes/${id}`, shoe)
      .then(() => {
        alert("cập nhật thành  công");
        navigate("/list"); //chuyển về trang danh sách sản phẩm sau khi cập nhật thành công
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
            type="file" // Sử dụng input với type là "file"
            name="image"
            accept="image/*" // Giới hạn kiểu file cho phép được chọn là các định dạng hình ảnh
            onChange={handleImageChange}
            class="form-control"
            id="exampleFormControlInput1"
          />
          {shoe.image && ( // Nếu đã chọn ảnh thì hiển thị ảnh đó
            <img src={shoe.image} alt="Preview" className="preview-image" />
          )}
        </div>
        <button type="submit" class="btn btn-primary">
          Cập nhật
        </button>
      </form>
    </div>
  );
}

export default EditShoe;
