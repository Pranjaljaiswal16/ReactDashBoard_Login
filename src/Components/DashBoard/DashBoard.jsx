import DashBoardBox from "../DashBoardBox/DashBoardBox";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEye, FaRegCircleUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { BsBagCheckFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Chart } from "react-google-charts";
const ITEM_HEIGHT = 48;
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import Product from "../../assets/Product1.webp";
import Pagination from "@mui/material/Pagination";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
  backgroundColor: "transparent",
};

const DashBoard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState([]);
  const [CatBy, setCatBy] = useState([]);
  const [BrandBy, setBrandBy] = useState([]);
  const [SearchBy, setSearchBy] = useState([]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardWrapperRow">
          <div className="col-md-8">
            <div className="dashBoardWrapper">
              <DashBoardBox
                color={["#1da256", "#48d483"]}
                icon={<FaRegCircleUser />}
                grow={true}
              />
              <DashBoardBox
                color={["#c012e2", "#eb64fe"]}
                icon={<FiShoppingCart />}
              />
              <DashBoardBox
                color={["#2c78e5", "#60aff5"]}
                icon={<BsBagCheckFill />}
              />
              <DashBoardBox
                color={["#e1950e", "#f3cd29"]}
                icon={<FaRegStar />}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="box graphBox">
              <div className="d-flex align-items-center w-100 bottomElem">
                <h5 className="text-white mb-0 mt-0">Total Sales</h5>
                <div className="ml-auto">
                  <Button className="ml-auto toggleIcon" onClick={handleClick}>
                    <BsThreeDotsVertical />
                  </Button>

                  <Menu
                    className="boxDropDown_menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => handleClose()}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    <MenuItem
                      key="last-day"
                      onClick={() => handleClose("last-day")}
                    >
                      <CiTimer />
                      Last Day
                    </MenuItem>

                    <MenuItem
                      key="last-week"
                      onClick={() => handleClose("last-week")}
                    >
                      <CiTimer />
                      Last Week
                    </MenuItem>

                    <MenuItem
                      key="last-week"
                      onClick={() => handleClose("last-week")}
                    >
                      <CiTimer />
                      Last Months
                    </MenuItem>

                    <MenuItem
                      key="last-week"
                      onClick={() => handleClose("last-week")}
                    >
                      <CiTimer />
                      Last Year
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
              <p className="text-white">$3,787,681.00 in Last Months</p>
              <Chart
                chartType="AreaChart"
                width="100%"
                height="220px"
                data={data}
                options={options}
              />
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="card shadow  border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>

          <div className=" row cardFilter mt-3">
            <div className="col-md-3 ">
              <h4>Show By</h4>

              <FormControl size="small" className="w-100">
                <Select
                  value={showBy}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  onChange={(e) => setShowBy(e.target.value)}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>Category By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={CatBy}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  onChange={(e) => setCatBy(e.target.value)}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>Brand By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={BrandBy}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  onChange={(e) => setBrandBy(e.target.value)}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>Search By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={SearchBy}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  onChange={(e) => setSearchBy(e.target.value)}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-border v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "300px" }}>Product</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th>Order</th>
                  <th>Sales</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={Product} className="w-100" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirts set for Female</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </td>
                  <td>Women</td>
                  <td>RichMan</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$ 21.00</del>
                      <span className=" text-danger"> $21.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button color="secondary" className="secondary">
                        <FaEye />
                      </Button>

                      <Button color="success" className="success">
                        <MdModeEditOutline />
                      </Button>

                      <Button color="error" className="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#2</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={Product} className="w-100" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirts set for Female</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </td>
                  <td>Women</td>
                  <td>RichMan</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$ 21.00</del>
                      <span className=" text-danger"> $21.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button color="secondary" className="secondary">
                        <FaEye />
                      </Button>

                      <Button color="success" className="success">
                        <MdModeEditOutline />
                      </Button>

                      <Button color="error" className="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#3</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={Product} className="w-100" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirts set for Female</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </td>
                  <td>Women</td>
                  <td>RichMan</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$ 21.00</del>
                      <span className=" text-danger"> $21.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button color="secondary" className="secondary">
                        <FaEye />
                      </Button>

                      <Button color="success" className="success">
                        <MdModeEditOutline />
                      </Button>

                      <Button color="error" className="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#4</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={Product} className="w-100" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirts set for Female</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </td>
                  <td>Women</td>
                  <td>RichMan</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$ 21.00</del>
                      <span className=" text-danger"> $21.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button color="secondary" className="secondary">
                        <FaEye />
                      </Button>

                      <Button color="success" className="success">
                        <MdModeEditOutline />
                      </Button>

                      <Button color="error" className="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={Product} className="w-100" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirts set for Female</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </td>
                  <td>Women</td>
                  <td>RichMan</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$ 21.00</del>
                      <span className=" text-danger"> $21.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button color="secondary" className="secondary">
                        <FaEye />
                      </Button>

                      <Button color="success" className="success">
                        <MdModeEditOutline />
                      </Button>

                      <Button color="error" className="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#6</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={Product} className="w-100" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirts set for Female</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </td>
                  <td>Women</td>
                  <td>RichMan</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$ 21.00</del>
                      <span className=" text-danger"> $21.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button color="secondary" className="secondary">
                        <FaEye />
                      </Button>

                      <Button color="success" className="success">
                        <MdModeEditOutline />
                      </Button>

                      <Button color="error" className="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#7</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={Product} className="w-100" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirts set for Female</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </td>
                  <td>Women</td>
                  <td>RichMan</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$ 21.00</del>
                      <span className=" text-danger"> $21.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button color="secondary" className="secondary">
                        <FaEye />
                      </Button>

                      <Button color="success" className="success">
                        <MdModeEditOutline />
                      </Button>

                      <Button color="error" className="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#8</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={Product} className="w-100" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirts set for Female</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </td>
                  <td>Women</td>
                  <td>RichMan</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$ 21.00</del>
                      <span className=" text-danger"> $21.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button color="secondary" className="secondary">
                        <FaEye />
                      </Button>

                      <Button color="success" className="success">
                        <MdModeEditOutline />
                      </Button>

                      <Button color="error" className="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#9</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={Product} className="w-100" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirts set for Female</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </td>
                  <td>Women</td>
                  <td>RichMan</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$ 21.00</del>
                      <span className=" text-danger"> $21.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button color="secondary" className="secondary">
                        <FaEye />
                      </Button>

                      <Button color="success" className="success">
                        <MdModeEditOutline />
                      </Button>

                      <Button color="error" className="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#10</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={Product} className="w-100" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirts set for Female</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </td>
                  <td>Women</td>
                  <td>RichMan</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$ 21.00</del>
                      <span className=" text-danger"> $21.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button color="secondary" className="secondary">
                        <FaEye />
                      </Button>

                      <Button color="success" className="success">
                        <MdModeEditOutline />
                      </Button>

                      <Button color="error" className="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#11</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={Product} className="w-100" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirts set for Female</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </td>
                  <td>Women</td>
                  <td>RichMan</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$ 21.00</del>
                      <span className=" text-danger"> $21.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button color="secondary" className="secondary">
                        <FaEye />
                      </Button>

                      <Button color="success" className="success">
                        <MdModeEditOutline />
                      </Button>

                      <Button color="error" className="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination */}
            <div className="d-flex TableFooter">
              <p>
                Showing <b>6</b> of <b>10</b>
              </p>

              <Pagination
                count={10}
                color="primary"
                className="pagination"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
