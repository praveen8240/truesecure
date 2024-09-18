import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveItem } from "../redux/SidebarSlice";
import Sidebar, { SidebarItem, SideHeading } from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/authSlice";
import { FileText, LogOut, Home, Book } from "lucide-react";
import toast from 'react-hot-toast';

const SideNav = () => {
  const [expanded, setExpanded] = useState(true);
  const [largeScreen, setScreen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeItem = useSelector((state) => state.sidebar.activeItem);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setScreen(false);
    }
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    dispatch(setActiveItem(path));
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()); // Ensure logoutUser is dispatched properly
      await navigate('/'); // Redirect after successful logout
      toast.success("Logout Successful");
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  const links = [
    { icon: <Home size={20} />, text: "TestCode", path: "/testcode" },
    { icon: <Book size={20} />, text: "Blogs", path: "/blogs" },
    { icon: <FileText size={20} />, text: "TestYourLink", path: "/testyourlink" },
    { icon: <Book size={20} />, text: "Help", path: "/help" },
    { icon: <LogOut size={20} />, text: "Logout", path: "/logout", onClick: handleLogout }
  ];

  return (
    <div className="flex">
      <Sidebar expanded={expanded} setExpanded={setExpanded}>
        {expanded && <SideHeading text="Actions" />}
        {links.map((link, index) => (
          <SidebarItem
            key={index}
            icon={link.icon}
            text={link.text}
            active={activeItem === link.path}
            onClick={() => link.onClick ? link.onClick() : handleNavigation(link.path)}
          />
        ))}
      </Sidebar>
      <main></main>
    </div>
  );
};

export default SideNav;
