import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

function ProductView() {
  const param = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: "product_id",
    name: "Product Name",
    description: "Product Description",
    price: 100,
    brand: "Brand Name",
    category: "Category",
  });

  useEffect(() => {});

  return (
    <div>
      <Header />
      <div className="singin-card">
        <h1> {data.name}</h1>
        <p> Description: {data.description}</p>
        <p>price: ${data.price}</p>
        <p>Brand: {data.brand}</p>
        <p>Category: {data.category}</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="back-to-pro-btn"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
}

export default ProductView;
