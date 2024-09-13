import React from "react";
import "./DashSidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloudIcon from "@mui/icons-material/Cloud";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

const DashSidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/dashboard/login");
  };

  return (
    <div className="sidebar">
      
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <hr />
          <p className="title">LISTS</p>
          <Link to={"/dashboard/users"} style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
            <li>
              <InventoryIcon className="icon" />
              <span>Articles</span>
            </li>
          </Link>
          <li>
            <ShoppingCartIcon className="icon" />
            <span>Saved Articles</span>
          </li>

          <hr />
          <p className="title">Organization</p>
          <li>
            <EqualizerIcon className="icon" />
            <span>Institutions</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Campus Ambassadors</span>
          </li>

          <hr />
          <p className="title">SERVICE</p>
          <li>
            <CloudIcon className="icon" />
            <span>Invite</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Edit Profile</span>
          </li>

          <hr />
          <p className="title">USER</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default DashSidebar;
