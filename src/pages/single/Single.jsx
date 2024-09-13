import React from "react";
import "./Single.scss";
import DashSidebar from "../../Components/dashsidebar/DashSidebar";
import DashNavbar from "../../Components/dashnavbar/DashNavbar";
import Chart from '../../Components/chart/Chart';
import ListTable from '../../Components/table/ListTable';
const Single = () => {
  return (
    <div className="single">
      <DashSidebar />
      <div className="singleContainer">
        {/* <DashNavbar /> */}
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">G.Hemanth Tigga</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">hemanth@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 9879878974</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Rajpura, Punjab 140401</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bharat</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <ListTable/>
        </div>
      </div>
    </div>
  );
};

export default Single;
