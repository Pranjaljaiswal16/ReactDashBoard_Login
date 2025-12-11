import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const MainRoutes = () => {
  return (
    <div>
      {/* REACT-Router */}

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
