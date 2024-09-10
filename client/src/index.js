import ReactDOM from "react-dom/client";
import{createBrowserRouter,RouterProvider} from "react-router-dom"
import "./index.css"
import Navbar from "./components/Navbar/Navbar"
import Home from "./views/Home/Home";
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Signup"

import AddTransaction from "./views/AddTransaction/AddTransaction";
import Footer from "./components/Footer/Footer";

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
    path: "/navbar",
    element: <Navbar/>,
  },
  {
    path: "/footer",
    element: <Footer/>,
  },
  {
    path: "*",
    element: "Not Found",
  },
]);

root.render(<RouterProvider router={router}/>);
