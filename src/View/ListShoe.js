import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Style/List.css";
function ListShoes() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/data_shoes")
      .then((res) => setShoes(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(id) {
    const confirm = window.confirm("Bạn có muốn xóa?");
    if (confirm) {
      axios.delete("http://localhost:3030/data_shoes/" + id).then((res) => {
        const updatedShoes = shoes.filter((shoe) => shoe.id !== id);
        setShoes(updatedShoes);
        alert(" Xóa thành công");
      });
    }
  }

  return (
    <div class="table">
      <h2>Danh sách sản phẩm</h2>

      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map((shoe) => (
            <tr>
              <td scope="row" key={shoe.id}>
                {shoe.id}
              </td>
              <td>{shoe.name}</td>
              <td>{shoe.shortdescription} </td>
              <td>{shoe.price}$</td>
              <td>
                <img
                  src={shoe.image}
                  alt={shoe.image}
                  style={{ width: "50%" }}
                />
              </td>
              <td className="btn-action">
                <Link to={`/edit/${shoe.id}`}>
                  <i class="fa-solid fa-pen-to-square"></i>
                </Link>
                <Link onClick={() => handleDelete(shoe.id)}>
                  <i class="fa-solid fa-trash"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListShoes;
