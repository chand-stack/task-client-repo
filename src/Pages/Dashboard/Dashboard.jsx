import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/MainImage.png";
import { BsMenuButtonWideFill, BsFillBookmarkStarFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GrDocumentTest } from "react-icons/gr";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex font-poppin mx-auto">
      <div className="lg:w-1/4 min-h-screen bg-slate-50">
        <div className="hidden lg:flex items-center gap-2 justify-center py-5">
          <h1 className="font-extrabold text-xl">Dashboard</h1>
          <img className="w-12" src={logo} alt="" />
        </div>
        <div className="hidden lg:contents">
          <ul className="menu-vertical space-y-4 p-4">
            {/* users route */}
            <li className="text-lg rounded-xl py-1 border-y font-semibold">
              <NavLink
                to="/dashboard/alluser"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-blue-600 flex items-center gap-2"
                    : "flex items-center gap-2 "
                }
              >
                <CgProfile /> All Users
              </NavLink>
            </li>
            <li className="text-lg rounded-xl flex  py-1 border-y font-semibold">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-blue-600 flex items-center gap-2"
                    : "flex items-center gap-2"
                }
              >
                <FaHome />
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:hidden fixed z-50">
          {/* drawer for mobile */}
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className="pt-2 pl-1 drawer-button lg:hidden"
              >
                <BsMenuButtonWideFill className="text-3xl" />
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <ul className="menu-vertical p-4 w-80 space-y-4 min-h-full bg-base-200">
                <div className="flex items-center gap-2 justify-center py-5">
                  <h1 className="font-semibold md:font-extrabold text-xl">
                    Dashboard
                  </h1>
                  <img className="w-12" src={logo} alt="" />
                </div>
                {/* Sidebar content here */}
                {/* users routes */}
                <li className="btn w-full text-lg btn-sm rounded-xl">
                  <NavLink
                    to="/dashboard/alluser"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "bg-blue-600 text-white w-full h-full rounded-xl"
                        : ""
                    }
                  >
                    All Users
                  </NavLink>
                </li>

                <li className="btn w-full text-lg btn-sm rounded-xl">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "bg-blue-600 text-white w-full h-full rounded-xl"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
