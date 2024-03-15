import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Home from "../../assets/home.svg";
import Truck from "../../assets/truck-fast.svg";
import User from "../../assets/3 User.svg";
import UsersIcon from "../../assets/2 User.svg";
import Shopping from "../../assets/shopping-cart.svg";
import Service from "../../assets/message-question.svg";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    
    <div className="bg-[#3A5743] h-[1100px]  lg:w-[20%] md:w-[27%] p-4">
      <img src={Logo} alt="Logo" className="pb-10" />
      <ul className="space-y-8">
        <li
          className={`flex gap-2 text-white ${
            activeItem === "home" ? "text-[#ffba49]" : "text-[#fff]"
          }`}
        >
          <img src={Home} alt="Home" />
          <Link to="/" onClick={() => handleItemClick("home")}>
            Home
          </Link>
        </li>
        <li className="flex gap-2">
          <img src={Service} alt="Service" />
          <Link
            to="/service-request"
            onClick={() => handleItemClick("service-request")}
            className={`block text-white ${
              activeItem === "service-request"
                ? "text-[#ffba49]"
                : "text-[#fff]"
            }`}
          >
            Service Request
          </Link>
        </li>
        <li className="flex gap-2">
          <img src={User} alt="User" />
          <Link
            to="/vendors"
            onClick={() => handleItemClick("vendors")}
            className={`block text-white ${
              activeItem === "vendors" ? "text-[#ffba49]" : "text-[#fff]"
            }`}
          >
            Vendors
          </Link>
        </li>
        <li className="flex gap-2">
          <img src={UsersIcon} alt="Users" />
          <Link
            to="/users"
            onClick={() => handleItemClick("users")}
            className={`block text-white ${
              activeItem === "users" ? "text-[#ffba49]" : "text-[#fff]"
            }`}
          >
            Users
          </Link>
        </li>
        <li className="flex gap-2">
          <img src={Truck} alt="Truck" />
          <Link
            to="/services"
            onClick={() => handleItemClick("services")}
            className={`block text-white ${
              activeItem === "services" ? "text-[#ffba49]" : "text-[#fff]"
            }`}
          >
            Services
          </Link>
        </li>
        <li className="flex gap-2">
          <img src={Shopping} alt="Shopping" />
          <Link
            to="/payments"
            onClick={() => handleItemClick("payments")}
            className={`block text-white ${
              activeItem === "payments" ? "text-[#ffba49]" : "text-[#fff]"
            }`}
          >
            Payment
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

