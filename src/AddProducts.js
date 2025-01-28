/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "./Header";
import "./SignIn.css";

function AddProducts() {
  const { state } = useLocation();
  console.log(state);

  if (state == undefined) {
    return;
  }

  const [productName, setProductName] = useState(
    state.item != "" ? state.item.name : ""
  );
  const [productDes, setProductDes] = useState(
    state.item != "" ? state.item.description : ""
  );
  const [productPrice, setProductPrice] = useState(
    state.item != "" ? state.item.price : ""
  );
  const [productBrand, setProductBrand] = useState(
    state.item != "" ? state.item.brand : ""
  );
  const [productCategory, setProductCategory] = useState(
    state.item != "" ? state.item.category : ""
  );

  const addUpdateProduct = (e) => {
    e.preventDefault();

    if (state.item != "") {
      console.log("update product");
    } else {
      console.log("add product");
    }
  };

  return (
    <div className="px-56">
      <Header />

      <form onSubmit={addUpdateProduct}>
        <div className="add-padding">
          <h1>
            {" "}
            {state.type == "addProduct" ? "Add Product" : "Edit Product"}
          </h1>
          <div>
            <label>Product Name</label>
            <div>
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                placeholder=""
                className="input m-1"
              />
            </div>
          </div>

          <div>
            <label>Description</label>
            <div>
              <input
                value={productDes}
                onChange={(e) => setProductDes(e.target.value)}
                type="text"
                placeholder=""
                className="input m-1"
              />
            </div>
          </div>

          <div>
            <label>Price</label>
            <div>
              <input
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                type="text"
                placeholder=""
                className="input m-1"
              />
            </div>
          </div>

          <div>
            <label>Brand</label>
            <div>
              <input
                value={productBrand}
                onChange={(e) => setProductBrand(e.target.value)}
                type="text"
                placeholder=""
                className="input m-1"
              />
            </div>
          </div>

          <div>
            <label>Category</label>
            <div>
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="input m-1"
                style={{ width: "95%", marginBottom: "20px" }}
              >
                <option value="no">Select a category</option>
                <option value="Technology & Gadgets">
                  Technology & Gadgets
                </option>
                <option value="Home Essentials">Home Essentials</option>
                <option value="Category">Category</option>
              </select>
            </div>
          </div>

          <div>
            <button type="submit" className="button">
              {state.type == "addProduct" ? "Add Product" : "Update Product"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
