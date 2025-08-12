import "./Header.css";
import { IoMdSearch } from "react-icons/io";
import us from "../Assets/united.png";
import chat from "../Assets/Chat.png";
import notification from "../Assets/bell.png";
import settings from "../Assets/06 Setting.png";
import placeholder from "../Assets/Placeholder.png";
import Select from "react-select";
import { useState } from "react";
import {Link} from "react-router-dom";

const options = [
  {
    value: "US",
    label: (
      <div className="custom-option">
        <img className="flag-icon" src={us} alt="US Flag" />
        <div className="text-content">
          <div className="language-name">English (US)</div>
        </div>
      </div>
    ),
  },
  {
    value: "BD",
    label: (
      <div className="custom-option">
        <img className="flag-icon" src={us} alt="Bangladesh Flag" />
        <div className="text-content">
          <div className="language-name">Bangladesh</div>
        </div>
      </div>
    ),
  },
];

export default function Header() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  return (
    <div className="header">
      <div className="search">
        <IoMdSearch className="search-icon" />
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="other-content">
        <div className="dropdown">
          <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
            placeholder="Select language"
          />
        </div>
        <div className="menu">
          <Link to="#" className="menu-item">
            <img src={chat} alt="Chat Icon" />
            <span className="badge">2</span>
          </Link>
          <Link to="#" className="menu-item">
            <img src={notification} alt="Notification Icon" />
            <span className="badge">2</span>
          </Link>
          <Link to="#" className="menu-item">
            <img src={settings} alt="Setting Icon" />
          </Link>
        </div>

        <div className="profile">
          <Link to="#" className="profile-link">
            <img src={placeholder} alt="Profile" />
          </Link>
          <div className="user-info">
            <div className="username">John Doe</div>
            <div className="role">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}
