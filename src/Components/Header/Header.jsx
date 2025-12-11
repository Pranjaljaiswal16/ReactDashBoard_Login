import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen, MdOutlineMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox/SearchBox";
import Profile from "../../assets/profile.jpg";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoMdMenu, IoMdNotificationsOutline } from "react-icons/io";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

// DropDown-Profile
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import { MyContext } from "../../App";
// End DropDown

const Header = () => {
  // USECONTEXT
  const context = useContext(MyContext);

  //1 Profile UseState
  const [anchorEl, setAnchorEl] = useState(null);
  const openmyAccount = Boolean(anchorEl);

  // Login/LogOut

  //2 Notification UseState:-
  const [isOpenNotofication, setisOpenNotofication] = useState(false);
  const openmyNotification = Boolean(isOpenNotofication);

  //1 Profile DROPDOWN
  const handleOpenmyAccount = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemyAccount = () => {
    setAnchorEl(null);
  };

  //2 NOTIFICATION DROPDOWN
  const handleOpenmynotificationdrop = (event) => {
    setisOpenNotofication(true);
  };
  const handleClosemynotificationdrop = () => {
    setisOpenNotofication(false);
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row d-flex align-items-center w-100">
            {/* 1:- Logo-Wraper */}
            <div className="col-sm-2 part-1">
              <Link to={"/"}>
                <img src={Logo} alt="logo" className="logo" />
              </Link>
            </div>

            {/* 2: MENU / Searchbar */}

            <div className="col-sm-3 d-flex align-items-center part-2 ">
              <Button
                className="rounded_circle mr-3"
                onClick={() =>
                  context.setisToggleSideBar(!context.isToggleSideBar)
                }
              >
                {context.isToggleSideBar === false ? (
                  <MdOutlineMenuOpen size={15} />
                ) : (
                  <IoMdMenu size={15} />
                )}
              </Button>

              <SearchBox />
            </div>

            {/* 3 BUTTONS */}

            <div className="col-sm-7 d-flex align-items-center justify-content-end part-3">
              {/* LightMode Button */}
              <Button className="rounded_circle mr-3">
                <MdOutlineLightMode />
              </Button>
              {/* END */}

              {/* DarkMode Button */}
              <Button className="rounded_circle mr-3">
                <MdDarkMode />
              </Button>
              {/* END */}

              {/* Add to Cart */}
              <Button
                className="rounded_circle mr-3"
                onClick={handleOpenmyAccount}
              >
                <FaCartPlus />
              </Button>

              {/* END */}

              {/* Mail */}
              <Button className="rounded_circle mr-3">
                <FiMail />
              </Button>
              {/* END */}

              {/* Notifications */}

              <div className="mynotificationWrapper position-relative">
                <Button
                  className="rounded_circle mr-3"
                  onClick={handleOpenmynotificationdrop}
                >
                  <IoMdNotificationsOutline />
                </Button>

                <Menu
                  anchorEl={isOpenNotofication}
                  className="notifications dropdown_list"
                  id="notifications"
                  open={openmyNotification}
                  onClose={handleClosemynotificationdrop}
                  onClick={handleClosemynotificationdrop}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <div className="head pl-3 pb-0">
                    <h5>Order (12)</h5>
                  </div>

                  <Divider className="pb-1" />

                  <div className="scroll">
                    <MenuItem onClick={handleClosemynotificationdrop}>
                      <div className="d-flex">
                        {/* common */}
                        <div>
                          <div className="userImg">
                            <span className="rounded_circle">
                              <img src={Profile} alt="Profile-image" />
                            </span>
                          </div>
                        </div>
                        {/* end */}

                        <div className="dropdowninfo">
                          <h4>
                            <span>
                              <b>Ram </b>
                              added to his favorite list
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">Few second Ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleClosemynotificationdrop}>
                      <div className="d-flex">
                        {/* common */}
                        <div>
                          <div className="userImg">
                            <span className="rounded_circle">
                              <img src={Profile} alt="Profile-image" />
                            </span>
                          </div>
                        </div>
                        {/* end */}

                        <div className="dropdowninfo">
                          <h4>
                            <span>
                              <b>Ram </b>
                              added to his fablist
                              <br />
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">Few second Ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleClosemynotificationdrop}>
                      <div className="d-flex">
                        {/* common */}
                        <div>
                          <div className="userImg">
                            <span className="rounded_circle">
                              <img src={Profile} alt="Profile-image" />
                            </span>
                          </div>
                        </div>
                        {/* end */}

                        <div className="dropdowninfo">
                          <h4>
                            <span>
                              <b>Ram </b>
                              added to his fablist
                              <br />
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">Few second Ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleClosemynotificationdrop}>
                      <div className="d-flex">
                        {/* common */}
                        <div>
                          <div className="userImg">
                            <span className="rounded_circle">
                              <img src={Profile} alt="Profile-image" />
                            </span>
                          </div>
                        </div>
                        {/* end */}

                        <div className="dropdowninfo">
                          <h4>
                            <span>
                              <b>Ram </b>
                              added to his fablist
                              <br />
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">Few second Ago</p>
                        </div>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="pl-2 pr-2">
                    <Button className=" btn-blue w-100 pt-3 pb-3">
                      View all notifications
                    </Button>
                  </div>
                </Menu>
              </div>

              {/* END */}

              {/* Profile Button */}

              {context.isLogin !== true ? (
                <>
                  <Link to={"/login"}>
                    <Button className={"btn-blue btn-lg btn-rounded "}>
                      Sign In
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <div className="myAccountWrapper">
                    <Button
                      className="MyAccount d-flex align-items-center"
                      onClick={handleOpenmyAccount}
                    >
                      {/* common */}
                      <div className="userImg">
                        <span className="rounded_circle">
                          <img src={Profile} alt="Profile-image" />
                        </span>
                      </div>
                      {/* end */}

                      <div className="userInfo">
                        <h4>Pranjal Jaiswal</h4>
                        <p className="mb-0">@pranjalcoder</p>
                      </div>
                    </Button>

                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={openmyAccount}
                      onClose={handleClosemyAccount}
                      onClick={handleClosemyAccount}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      {/* <Divider /> */}

                      <MenuItem onClick={handleClosemyAccount}>
                        <ListItemIcon>
                          <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        My Account
                      </MenuItem>

                      <MenuItem onClick={handleClosemyAccount}>
                        <ListItemIcon>
                          <IoShieldCheckmarkSharp fontSize={16} />
                        </ListItemIcon>
                        Reset Password
                      </MenuItem>

                      <MenuItem onClick={handleClosemyAccount}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </div>
                </>
              )}

              {/*  END */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
