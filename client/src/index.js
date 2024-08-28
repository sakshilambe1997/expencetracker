
import ReactDOM from "react-dom/client";
import{createBrowserRouter,RouterProvider} from "react-router-dom"

import Home from "./views/Home/Home";
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Signup"
import "./global.css"
import AddTransaction from "./views/AddTransaction/AddTransaction";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/login",
    element: <Login/>,
  },

  {
    path: "/signup",
    element: <Signup/>,
  },

  {
    path: "/add-transaction",
    element: <AddTransaction/>,
  },


  {
    path: "*",
    element: "Not Found",
  },


]);

root.render(<RouterProvider router={router}/>);
