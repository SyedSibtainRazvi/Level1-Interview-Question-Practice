import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div
      onClick={() => (window.location.href = "#tag=" + title.toLowerCase())}
      className={`sidebarOption ${selected && "sidebarOption--active"}`}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
