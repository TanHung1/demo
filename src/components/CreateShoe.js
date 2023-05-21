import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Style/create.css";
class CreateShoe extends React.Component {
  state = {
    name: "",
    price: "",
    description: "",
    image: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:3030/data_shoes", this.state).then(() => {
      // chuyển đến trang danh sách sản phẩm sau khi tạo mới thành công
      alert("Tạo thành công");
    });
  };

  render() {
    const { name, price, description, image } = this.state;

    return (
      <div className="form-create">
        <h2>Tạo sản phẩm mới</h2>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleFormControlInput1">Tên Sản phẩm</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Mô tả</label>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange}
              class="form-control"
              id="exampleFormControlInput1"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Hình ảnh</label>
            <input
              type="text"
              name="image"
              value={image}
              onChange={this.handleChange}
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Tạo mới
          </button>
        </form>
      </div>
    );
  }
}
export default CreateShoe;
