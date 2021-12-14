import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOptions.css";


const HeaderOption = ({ avatar, Icon, title, onClick }) => {
 

  return (
    <div className="headerOption" onClick={onClick}>
     
        <Avatar
          className="headerOption__icon"
          
          style={{ fontSize: "10px" }}
        >
          
        </Avatar>
      
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;