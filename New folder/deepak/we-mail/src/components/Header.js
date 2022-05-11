import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  const searchParams = (event) => {
    if (event.target.value) {
      window.location.href = "#search=" + event.target.value;
    } else {
      window.location.href = "#";
    }
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.nidirect.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/email_logo.jpg?itok=ifUhNgCT"
          alt="logo"
        />

        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" onChange={searchParams} />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar src="https://media.istockphoto.com/photos/happy-smiling-man-looking-away-picture-id1158245623?k=20&m=1158245623&s=612x612&w=0&h=rGmn02kNdoQySPEoQmbbDBxOayL4sdW3QWqP9rjgxCg=" />
      </div>
    </div>
  );
}

export default Header;
