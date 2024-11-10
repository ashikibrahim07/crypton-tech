import React from "react";
import "../styles/WidgetOrderStats.scss";

import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import IconWithCircle from "./IconWithCircle";

const WidgetOrderStats = ({ stats }) => {
  if (!stats || stats.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="widget-order-stats">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`order-stat ${
            stat.percentage.includes("+") ? "positive" : "negative"
          }`}
        >
          <div className="header">
            <h2>{stat.title}</h2>
            <span className="percentage">
              {stat.percentage.includes("+") ? (
                <ArrowUpward />
              ) : (
                <ArrowDownward />
              )}
              {stat.percentage.replace(/[+-]/, "")}
            </span>
          </div>

          <div className="icon-count">
            <div className="icon">
              {stat.title === "Orders" && (
                <IconWithCircle
                  Icon={ShoppingCartIcon}
                  backgroundColor="lightgreen"
                  iconColor="#fff"
                />
              )}
              {stat.title === "Revenue" && (
                <IconWithCircle
                  Icon={ArrowOutwardIcon}
                  backgroundColor="orange"
                  iconColor="#fff"
                />
              )}
              {stat.title === "Take away" && (
                <IconWithCircle
                  Icon={EmojiFoodBeverageIcon}
                  backgroundColor="#FFFF00"
                  iconColor="white"
                />
              )}
              {stat.title === "Dine in" && (
                <IconWithCircle
                  Icon={LocalDiningIcon}
                  backgroundColor="red"
                  iconColor="white"
                />
              )}
            </div>

            <div className="count">
              {stat.title === "Revenue" && "$"}
              {stat.count}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WidgetOrderStats;
