import React from "react";
import { IconButton } from "@mui/material";

const IconWithCircle = ({ Icon, backgroundColor, iconColor }) => {
  return (
    <div
      className="icon-with-circle"
      style={{
        backgroundColor: backgroundColor,
        padding: "10px",
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "35px",
        height: "35px",
      }}
    >
      <Icon style={{ color: iconColor }} />
    </div>
  );
};

export default IconWithCircle;
