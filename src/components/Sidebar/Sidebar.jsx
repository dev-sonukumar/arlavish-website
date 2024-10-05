import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Button/Icon";

function Sidebar({ closeMenu }) {
  const menuItem = [
    { id: 1, name: "Home", link: "/", icon: "house" },
    {
      id: 1,
      name: "Registration",
      link: "/teacher-registration",
      icon: "person",
    },
    { id: 2, name: "Key Features", link: "/Key-Features", icon: "person" },
    { id: 3, name: "About Us", link: "/About-Us", icon: "ui-radios-grid" },
    { id: 4, name: "Contact Us", link: "/Contact-Us", icon: "ui-radios-grid" },
    { id: 5, name: "Blog", link: "/blog", icon: "grid" },
  ];
  return (
    <>
      <ul className="">
        {menuItem.map((item) => (
          <li className="p-1" key={item.id}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-md ${
                  isActive
                    ? "bg-white text-black shadow"
                    : "text-white hover:bg-orange-200 hover:text-black"
                }`
              }
              onClick={closeMenu}
            >
              <Icon className={`mr-2`} children={item.icon}></Icon>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sidebar;
