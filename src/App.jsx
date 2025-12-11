import Header from "./Components/Header/Header";
import Sidebar from "./Components/SideBar/Sidebar";
import MainRoutes from "../src/Routes/MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const App = () => {
  const [isLogin, setisLogin] = useState(false);
  const [isToggleSideBar, setisToggleSideBar] = useState(false);
  const [isHideSideBarAndHeader, setisHideSideBarAndHeader] = useState(false);

  const values = {
    isToggleSideBar,
    setisToggleSideBar,
    isLogin,
    setisLogin,
    isHideSideBarAndHeader,
    setisHideSideBarAndHeader,
  };

  // useEffect(() => {
  //   alert(isToggleSideBar);
  // }, [isToggleSideBar]);

  return (
    <>
      <MyContext.Provider value={values}>
        {/* HeaderCondition */}
        {isHideSideBarAndHeader !== true && <Header />}

        {/* Header Condition End */}
        <div className="main d-flex">
          {/* Sidebar Condition */}

          {isHideSideBarAndHeader !== true && (
            <div
              className={`sideBarWrapper ${
                isToggleSideBar === true ? "toogle" : ""
              }`}
            >
              <Sidebar />
            </div>
          )}

          {/* Sidebar End */}

          {/* Routes */}
          <div
            className={`content ${isHideSideBarAndHeader === true && "full"} ${
              isToggleSideBar === true ? "toogle" : ""
            }`}
          >
            <MainRoutes />
          </div>
        </div>
      </MyContext.Provider>
    </>
  );
};

export default App;
