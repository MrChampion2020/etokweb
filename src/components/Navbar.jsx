import React from "react"
import { NavLink } from "react-router-dom"
import { CgProfile } from "react-icons/cg"
import { FaHome } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { IoChatbox } from "react-icons/io5"

const Navbar = () => {
  const navItems = [
    { to: "/user", icon: FaHome, label: "Home" },
    { to: "/user/likes", icon: FaHeart, label: "Likes" },
    { to: "/user/chat", icon: IoChatbox, label: "Chat" },
    { to: "/user/profile", icon: CgProfile, label: "Profile" },
  ]

  return (
    <nav className="bg-blue-500 text-blue-200 w-full fixed bottom-0 left-0 right-0 md:relative">
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex items-center justify-between md:justify-start">
          {navItems.map((item) => (
            <li key={item.to} className="flex-1">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col md:flex-row items-center justify-center py-2 md:py-4 px-1 md:px-4 hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 ${
                    isActive ? "bg-blue-700 text-white" : ""
                  }`
                }
              >
                <item.icon className="text-xl md:text-2xl mb-1 md:mb-0 md:mr-2" />
                <span className="text-xs md:text-base">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar