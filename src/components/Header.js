import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from './HeaderOption'


const Header = () => {
  

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tailorbrands.com%2Flogo-maker%2Fwhat-is-a-logo&psig=AOvVaw0mhY8s82sfjqTuS1HZaNcO&ust=1639492637704000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjHjJmA4fQCFQAAAAAdAAAAABAD"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
       
      </div>
    </div>
  );
};

export default Header;