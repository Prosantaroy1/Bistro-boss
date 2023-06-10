import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Castom Hook/useCart";

const Dashboard = () => {
    ////
    const [cart] = useCart();
  return (
    <div>
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-white">
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard/home">
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservations">
                 Reservations
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/history">
              Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart">
                 My Cart
                 <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                 Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu"> Our Menu</NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">Order Food</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
