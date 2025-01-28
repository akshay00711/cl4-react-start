import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import './Dashboard.css';

function Dashboard() {
  const mock = [
    {
      id: "product_id",
      name: "Product Name",
      description: "Product Description",
      price: 100,
      brand: "Brand Name",
      category: "Category",
    },
  ];

  const [data, setData] = useState(mock);
  const [user , setUser] = useState(false);

  console.log(data);
  const navigate = useNavigate();

  const redirecttoAddProduct = () => {
    navigate("/add-product", { state: { type: "addProduct", item: "" } });
  };

  const redirectToProductView = (item) => {
    console.log(item.item);
    navigate(`/products/${item.item.id}`);
  };

  const redirectToEditProduct = (item) => {
    navigate("/add-product", {
      state: { type: "editProduct", item: item.item },
    });
  };

  useEffect(() => {
      if (typeof window !== "undefined") {
          try{
              if (localStorage.getItem("user")) {
                  setUser(JSON.parse(localStorage.getItem("user")));
              }
          }catch(e){
              return {"error" : "Filter name not found !"};
          }
      }
    },[])

  return (
    <div>
      <Header />

      <div className="area">
        <h1> Welcome, {user.username} </h1>
        <h1>Existing Product</h1>

        <div className="add-div">
          <button
            className="add-btn"
            onClick={redirecttoAddProduct}
          >
            Add Product
          </button>
        </div>

        <div className="table-div">
          <table className="table">
            <thead className="uppercase">
              <tr>
                <th scope="col" className="px-2 py-3">
                  Name
                </th>
                <th scope="col" className="px-2 py-3">
                  Description
                </th>
                <th scope="col" className="px-2 py-3">
                  Price
                </th>
                <th scope="col" className="px-2 py-3">
                  Brand
                </th>
                <th scope="col" className="px-2 py-3">
                  Category
                </th>
                <th scope="col" className="px-2 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {data.length > 0 && (
              <tbody>
                {data.map((item) => {
                  return (
                    <tr
                      key={item.id}
                     
                    >
                      <td
                        scope="row"
                        
                      >
                        {item.name}
                      </td>
                      <td className="px-2 py-3"> {item.description}</td>
                      <td className="px-2 py-3">{item.price}</td>
                      <td className="px-2 py-3">{item.brand}</td>
                      <td className="px-2 py-3">{item.category}</td>
                      <td className="action-btn">
                        <button
                          onClick={() => redirectToProductView({ item })}
                          className="cl1"
                        >
                          View
                        </button>
                        <button
                          onClick={() => redirectToEditProduct({ item })}
                          className="cl2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => null}
                          className="cl3"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
          {data.length == 0 && (
            <p className="empty">
              {" "}
              No products available{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
