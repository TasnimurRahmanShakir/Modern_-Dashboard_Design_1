import React, { useState } from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";

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
              <div className="quick-transfer">
                <h2>Quick Transfer</h2>
                <div className="transfer-options">
                  <div className="shortcut-profile">
                    <img src={placeholder} alt="User 1" />
                    <img src={placeholder} alt="User 2" />
                    <img src={placeholder} alt="User 3" />
                    <button className="add-user-btn"><FaPlus className="add-btn"/></button>
                  </div>
                  <div className="amount-input">
                    <label htmlFor="amount">Amount</label>
                    <input
                      type="text"
                      placeholder="$ 100"
                      value={amount}
                      id="amount"
                      onChange={e => setAmount(e.target.value)}
                    />
                  </div>
                  <button className="transfer-btn">Transfer </button>
                </div>
              </div>
            </div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
