import React, { useState } from "react";
import ProfitsChart from "./ProfitCharts";
import Header from "./Header";
import LeftBar from "./LeftBar";
import { IoSendSharp } from "react-icons/io5";
import { BiTransferAlt } from "react-icons/bi";

import "./Dashboard.css";
import placeholder from "../Assets/Placeholder.png";
import { FaPlus } from "react-icons/fa6";

export default function Dashboard() {
  const [amount, setAmount] = useState("");

  return (
    <div className="dashboard">
      <div className="left-bar">
        <LeftBar />
      </div>
      <div className="dashboard-content">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <h1>Banking</h1>
          <div className="card-holder">
            <div className="card">
              <div className="my-card">
                <h2>My Card</h2>
                <div className="card-design">
                  <div className="circle">
                    <div className="one"></div>
                    <div className="two"></div>
                  </div>
                  <div className="masking">
                    <div className="ellipse1"></div>
                    <div className="ellipse2"></div>
                  </div>

                  <div className="card-content">
                    <h3 className="card-number">**** **** **** 1234</h3>
                    <div className="balance">
                      <p>Balance</p>
                      <h3>$ 12,345.67</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-holder">
                <h2>Quick Transfer</h2>
                <div className="my-card">
                  <div className="shortcut-profile">
                    <div className="user">
                      <img src={placeholder} alt="User 1" />
                      <p className="username">Tony</p>
                    </div>
                    <div className="user">
                      <img src={placeholder} alt="User 1" />
                      <p className="username">Karan</p>
                    </div>
                    <div className="user">
                      <img src={placeholder} alt="User 1" />
                      <p className="username">Jordan</p>
                    </div>
                    <div className="user add-user-btn">
                      <FaPlus className="add-btn" />
                    </div>
                  </div>
                  <div className="amount-input">
                    <label htmlFor="amount" id="amount">
                      Amount
                    </label>
                    <input
                      type="text"
                      placeholder="$ 100"
                      value={amount}
                      id="amount"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <button className="transfer-btn">
                    Transfer <IoSendSharp />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="graph-container">
                <h2>Profits</h2>
                <ProfitsChart className="graph" />
              </div>

              <div className="summery">
                <select>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>

                <div className="income-expense">
                  <div className="income">
                    <span className="icon-box income">
                      <BiTransferAlt
                        style={{ color: "white", backgroundColor: "#5A4FCF" }}
                        className="icon"
                      />
                    </span>
                    <div className="content">
                      <p>Income</p>
                      <h3>$12,890,00</h3>
                    </div>
                  </div>
                  <div className="expense">
                    <span className="icon-box expense">
                      <BiTransferAlt
                        style={{ color: "white", backgroundColor: "#F4B740" }}
                        className="icon"
                      />
                    </span>
                    <div className="content">
                      <p>Expense</p>
                      <h3>$12,890,00</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
