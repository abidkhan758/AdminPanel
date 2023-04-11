import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaHome, FaBars, FaUser, FaAngleDown } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },

  {
    path: "/components",
    name: "Components",
    icon: <BiAnalyse />,
    subRoutes: [
      {
        path: "/forms/profile",
        name: "Profile",
        icon: <BsCartCheck />,
      },
      {
        path: "/forms/FA",
        name: "2FA",
        icon: <BsCartCheck />,
      },
      {
        path: "/forms/Billing",
        name: "Billing",
        icon: <BsCartCheck />,
      },
    ],
  },
  {
    path: "/forms",
    name: "Forms",
    icon: <BsCartCheck />,
    subRoutes: [
      {
        path: "/forms/HorizontalForm",
        name: "HorizontalForm",
        icon: <BsCartCheck />,
      },
      {
        path: "/forms/FA",
        name: "2FA",
        icon: <BsCartCheck />,
      },
      {
        path: "/forms/Billing",
        name: "Billing",
        icon: <BsCartCheck />,
      },
    ],
  },
  {
    path: "/tables",
    name: "Tables",
    icon: <BiCog />,
    subRoutes: [ 
      {
        path: "/forms/profile",
        name: "Profile",
        icon: <BsCartCheck />,
      },
      {
        path: "/forms/FA",
        name: "2FA",
        icon: <BsCartCheck />,
      },
      {
        path: "/forms/Billing",
        name: "Billing",
        icon: <BsCartCheck />,
      },
    ],
  },
];
const Sidebar = ({ children }) => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));


  const [toggleThemeControl, setToggleThemeControl] = useState(false);

  const [listStyle, setListStyle] = useState({
    backgroundColor: "rgb(0, 7, 61)",
  });

  const greenTheme = () => {
    setListStyle({
      backgroundColor: "green",
    });
  };

  const redTheme = () => {
    setListStyle({
      backgroundColor: " red",
    });
  };

  const blueTheme = () => {
    setListStyle({
      backgroundColor: " blue",
    });
  };

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 5,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: "auto",

      opacity: 5,
      transition: 0.5,
    },
    show: {
      width: "140px",

      opacity: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const themeControl = () => {
    if (!toggleThemeControl) {
      setToggleThemeControl(true);
    } else {
      setToggleThemeControl(false);
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("dataToLocal");
   
  };
  return (
    <>
      <i
        class="fa fa-cogs themePopUp"
        aria-hidden="true"
        onClick={themeControl}
      ></i>
      {toggleThemeControl && (
        <div className="themePanel">
          <span
            className="badge rounded-pill badge-primary"
            style={{
              border: "1px solid green",
              color: "green",
              backgroundColor: "green",
            }}
            onClick={greenTheme}
          >
            {" "}
          </span>
          <span
            className="badge rounded-pill badge-primary"
            style={{
              border: "1px solid red",
              color: "red",
              backgroundColor: "red",
            }}
            onClick={redTheme}
          >
            {" "}
          </span>
          <span
            className="badge rounded-pill badge-primary"
            style={{
              border: "1px solid blue",
              color: "blue",
              backgroundColor: "blue",
            }}
            onClick={blueTheme}
          >
            {" "}
          </span>
        </div>
      )}
      <div className="main-container">
        <motion.div
          style={listStyle}
          animate={{
            width: isOpen ? "267px" : "37px",
            //    color:isOpen?"pink":"yellow",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 11,
            },
          }}
          className="sidebar"
        >
          <div className="top-section">
            {isOpen && (
              <h1 className="logo">
             User Name
              </h1>
            )}
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search-icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  placeholder="Search..."
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route) => {
              console.log("route", route);
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    route={route}
                    key={route.name}
                  />
                );
              }
              return (
                <NavLink
                  activeClassName="active"
                  to={route.path}
                  key={route.name}
                  className="link"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}{" "}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          <form>
            {/* <button type="submit" onClick={clearLocalStorage}>
              Logout
            </button> */}
          </form>
        </motion.div>
        <main>{children}</main>
       
      </div>
    </>
  );
};

export default Sidebar;
