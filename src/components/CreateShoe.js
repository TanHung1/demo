import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Style/create.css";

function CreateShoe() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    price: "",
    shortdescription: "",
    image: null, // Thêm thuộc tính image với giá trị ban đầu là null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Hàm xử lý sự kiện khi chọn file
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Kiểm tra file có tồn tại không
    if (file) {
      // Nếu có thì định dạng file thành định dạng cho phép
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setState((prevState) => ({ ...prevState, image: reader.result }));
      };
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:3030/data_shoes", state).then(() => {
      // chuyển đến trang danh sách sản phẩm sau khi tạo mới thành công
      alert("Tạo thành công");
      navigate("/list");
    });
  };

  const { name, price, shortdescription, image } = state;

  return (
    <div className="form-create">
      <h2>Tạo sản phẩm mới</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Tên Sản phẩm</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput1">Giá</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput1">Mô tả</label>
          <textarea
            type="text"
            name="shortdescription"
            value={shortdescription}
            onChange={handleChange}
            class="form-control"
            id="exampleFormControlInput1"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Hình ảnh</label>
          <input
            type="file" // Sử dụng input với type là "file"
            name="image"
            accept="image/*" // Giới hạn kiểu file cho phép được chọn là các định dạng hình ảnh
            onChange={handleImageChange} // Dùng hàm xử lý sự kiện handleImageChange
            class="form-control"
            id="exampleFormControlInput1"
          />
          {image && ( // Nếu đã chọn ảnh thì hiển thị ảnh đó
            <img src={image} alt="Preview" className="preview-image" />
          )}
        </div>

        <button type="submit" class="btn btn-primary">
          Tạo mới
        </button>
      </form>
    </div>
  );
}

export default CreateShoe;
