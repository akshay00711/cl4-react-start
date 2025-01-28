import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import AddProducts from "./AddProducts";
import ProductView from "./ProductView";
import Protected from "./AuthLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },

    {
      path: "/dashboard",
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "/add-product",
      element: (
        <Protected>
          <AddProducts />
        </Protected>
      ),
    },
    {
      path: "/products/:id",
      element: (
        <Protected>
          <ProductView />
        </Protected>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
