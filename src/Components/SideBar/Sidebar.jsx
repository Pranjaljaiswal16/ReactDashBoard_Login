import Button from "@mui/material/Button";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { SiImessage } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MyContext } from "../../App";

const Sidebar = () => {
  const [ActiveTab, setActiveTab] = useState(null);
  const [isToggleSubmenu, setisToggleSubmenu] = useState(false);
  const context = useContext(MyContext);

  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setisToggleSubmenu(!isToggleSubmenu);
  };

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link>
              <Button
                variant="text"
                className={`w-100 ${
                  ActiveTab === 0 && isToggleSubmenu === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(0)}
              >
                <span className="icon">
                  <RiDashboardHorizontalFill />
                </span>
                Dashboard{" "}
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>

            <div
              className={`submenuWrapper ${
                ActiveTab === 0 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to={""}>Product List</Link>
                </li>
                <li>
                  <Link to={""}>Product View</Link>
                </li>
                <li>
                  <Link to={""}>Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link>
              <Button
                variant="text"
                className={`w-100 ${
                  ActiveTab === 1 && isToggleSubmenu === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(1)}
              >
                <span className="icon">
                  <FaCartPlus />
                </span>
                Products
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>

            <div
              className={`submenuWrapper ${
                ActiveTab === 1 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to={""}>Product List</Link>
                </li>
                <li>
                  <Link to={""}>Product View</Link>
                </li>
                <li>
                  <Link to={""}>Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link>
              <Button
                variant="text"
                className={`w-100 ${
                  ActiveTab === 2 && isToggleSubmenu === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(2)}
              >
                <span className="icon">
                  <BsFillCartCheckFill />
                </span>
                Orders
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>

            <div
              className={`submenuWrapper ${
                ActiveTab === 2 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to={""}>Product List</Link>
                </li>
                <li>
                  <Link to={""}>Product View</Link>
                </li>
                <li>
                  <Link to={""}>Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link>
              <Button
                variant="text"
                className={`w-100 ${
                  ActiveTab === 3 && isToggleSubmenu === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(3)}
              >
                <span className="icon">
                  <FaMessage />
                </span>
                Message
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>

            <div
              className={`submenuWrapper ${
                ActiveTab === 3 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to={""}>Product List</Link>
                </li>
                <li>
                  <Link to={""}>Product View</Link>
                </li>
                <li>
                  <Link to={""}>Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link>
              <Button
                variant="text"
                className={`w-100 ${
                  ActiveTab === 4 && isToggleSubmenu === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(4)}
              >
                <span className="icon">
                  <IoMdNotifications />
                </span>
                Notifications
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>

            <div
              className={`submenuWrapper ${
                ActiveTab === 4 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to={""}>Product List</Link>
                </li>
                <li>
                  <Link to={""}>Product View</Link>
                </li>
                <li>
                  <Link to={""}>Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link>
              <Button
                variant="text"
                className={`w-100 ${
                  ActiveTab === 5 && isToggleSubmenu === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(5)}
              >
                <span className="icon">
                  <IoMdSettings />
                </span>
                Settings
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>

            <div
              className={`submenuWrapper ${
                ActiveTab === 5 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to={""}>Product List</Link>
                </li>
                <li>
                  <Link to={""}>Product View</Link>
                </li>
                <li>
                  <Link to={""}>Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link>
              <Button
                variant="text"
                className={`w-100 ${
                  ActiveTab === 6 && isToggleSubmenu === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(2)}
              >
                <span className="icon">
                  <BsFillCartCheckFill />
                </span>
                Orders
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>

            <div
              className={`submenuWrapper ${
                ActiveTab === 6 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to={""}>Product List</Link>
                </li>
                <li>
                  <Link to={""}>Product View</Link>
                </li>
                <li>
                  <Link to={""}>Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link>
              <Button
                variant="text"
                className={`w-100 ${
                  ActiveTab === 7 && isToggleSubmenu === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(7)}
              >
                <span className="icon">
                  <FaMessage />
                </span>
                Message
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>

            <div
              className={`submenuWrapper ${
                ActiveTab === 7 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to={""}>Product List</Link>
                </li>
                <li>
                  <Link to={""}>Product View</Link>
                </li>
                <li>
                  <Link to={""}>Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link>
              <Button
                variant="text"
                className={`w-100 ${
                  ActiveTab === 8 && isToggleSubmenu === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(8)}
              >
                <span className="icon">
                  <IoMdNotifications />
                </span>
                Notifications
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>

            <div
              className={`submenuWrapper ${
                ActiveTab === 8 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to={""}>Product List</Link>
                </li>
                <li>
                  <Link to={""}>Product View</Link>
                </li>
                <li>
                  <Link to={""}>Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link>
              <Button
                variant="text"
                className={`w-100 ${
                  ActiveTab === 9 && isToggleSubmenu === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(9)}
              >
                <span className="icon">
                  <IoMdSettings />
                </span>
                Settings
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>

            <div
              className={`submenuWrapper ${
                ActiveTab === 9 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to={""}>Product List</Link>
                </li>
                <li>
                  <Link to={""}>Product View</Link>
                </li>
                <li>
                  <Link to={""}>Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="logoutWrapper">
          <div className="logOutBox">
            <Button variant="contained">
              <IoMdLogOut size={18} />
              LogOut
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
