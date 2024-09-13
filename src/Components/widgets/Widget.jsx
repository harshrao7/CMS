import React, { useEffect, useState } from "react";
import "./Widget.scss";
import Person2Icon from "@mui/icons-material/Person2";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <Person2Icon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "overall coding score":
      data = {
        title: "OVERALL CODING SCORE",
        isMoney: false,
        // link: "View all orders",
        icon: (
          <AssessmentOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.3)",
            }}
          />
        ),
      };
      break;
    case "total problem solved":
      data = {
        title: "TOTAL PROBLEM SOLVED",
        isMoney: true,
        // link: "View net earnings",
        icon: (
          <AddTaskOutlinedIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "monthly coding score":
      data = {
        title: "MONTHLY CODING SCORE",
        isMoney: true,
        // link: "See details",
        icon: (
          <DataObjectOutlinedIcon
            className="icon"
            style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
      // console.log(lastMonth);
      console.log(prevMonth);

      const lastMonthQuery = query(
        collection(db, "users"),
        where("timestamp", "<=", today),
        where("timestamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(db, "users"),
        where("timestamp", "<=", lastMonth),
        where("timestamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          (lastMonthData.docs.length)) * 100
      );
    };
    fetchData();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {/* {data.isMoney && "Rs."} */}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? (
            <KeyboardArrowDownOutlinedIcon />
          ) : (
            <KeyboardArrowUpOutlinedIcon />
          )}
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
