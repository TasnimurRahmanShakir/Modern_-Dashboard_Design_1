import "./LeftBar.css";

import logo from "../assets/logo.png";
import { TbHomeFilled, TbCoins } from "react-icons/tb";
import { GrMail } from "react-icons/gr";
import {
  RiContactsBookUploadFill,
  RiDashboardHorizontalFill,
  RiMoneyDollarBoxFill,
} from "react-icons/ri";
import { FaFileInvoice } from "react-icons/fa";
import { BsFillTicketPerforatedFill } from "react-icons/bs";

export default function LeftBar() {
  return (
    <div className="left-bar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Icons */}
      <div className="icons">
        <a href="#">
          <TbHomeFilled className="icon" />
        </a>
        <a href="#">
          <GrMail className="icon" />
        </a>
        <a href="#">
          <RiContactsBookUploadFill className="icon" />
        </a>
        <a href="#">
          <TbCoins className="icon" />
        </a>
        <a href="#">
          <RiDashboardHorizontalFill className="icon" />
        </a>
        <a href="#">
          <FaFileInvoice className="icon" />
        </a>
        <a href="#">
          <RiMoneyDollarBoxFill className="icon" />
        </a>
        <a href="#">
          <BsFillTicketPerforatedFill className="icon" />
        </a>
      </div>
    </div>
  );
}
