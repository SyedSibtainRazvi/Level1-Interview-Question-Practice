import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import DeleteIcon from "@material-ui/icons/Delete";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NearMeIcon from "@material-ui/icons/NearMe";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOption Icon={InboxIcon} title="All" selected={true} />
      <SidebarOption Icon={AccessTimeIcon} title="Drafts" />
      <SidebarOption Icon={NoteIcon} title="Spam" />
      <SidebarOption Icon={DeleteIcon} title="Trash" />
      <SidebarOption Icon={LabelImportantIcon} title="Important" />
      <SidebarOption Icon={NearMeIcon} title="Sent" />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
      >
        {" "}
        Compose
      </Button>
    </div>
  );
}

export default Sidebar;
