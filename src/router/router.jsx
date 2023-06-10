import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Order from "../orders/order/order";
import Login from "../pages/loginPage/login";
import SignUp from "../pages/SignupPage/SignUp";
import SecreatePage from "../pages/shared/SecreatePage/SecreatePage";
import PrivetRouter from "./PrivetRouter";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'menu',
          element: <OurMenu/>
        },
        {
          path: 'order/:category',
          element: <Order/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'signup',
          element: <SignUp/>
        },
        {
          path: 'secreate',
          element: <PrivetRouter><SecreatePage/></PrivetRouter>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard/>,
      children: [
         {
          path: 'mycart',
          element: <MyCart/>
         },
      ]
    }
  ]);

export default router;