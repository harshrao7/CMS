import React, { useContext } from "react";
import "./DashNavbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/DarkModeContext";
import DashMenu from "../DashMenu";

const DashNavbar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  const { state, dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <a className="search" href="/">
          <img
            src="https://res.cloudinary.com/den6snpmc/image/upload/v1696888128/logo_qqpz40.png"
            alt="CoCoding"
          />
        </a>
        <div className="items">
          <div className="item">
            <a href="/dashboard">DashBoard</a>
          </div>

          <div className="item">
            {/* <FullscreenExitOutlinedIcon className="icon" /> */}
            <a href="/courses">Courses</a>
          </div>
          <div className="item">
            {/* <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div> */}
            <a href="#">Jobs</a>
          </div>
          <div className="item">
            {/* <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div> */}
            <a href="#">Practice</a>
          </div>
          <div className="item">
            <a href="#">Contests</a>
          </div>
          <div className="item">
            <DarkModeIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item1">
            {/* <img
              src="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="avatar"
            /> */}
            <DashMenu/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
