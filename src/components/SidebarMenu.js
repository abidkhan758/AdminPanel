import React, { useState,useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaBars, FaUser, FaAngleDown } from "react-icons/fa";

const SidebarMenu = ({ showAnimation, route, isOpen,setIsOpen }) => {
  const menuAnimation = {
    hidden: {
      height: 0,

      opacity: 5,
      transition: { duration: 0.5, when: "afterChildren" },
    },
    show: {
      height: "auto",

      opacity: 5,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const menuItemAnimation = {
    hidden: (i) => ({
      padding: 0,
      x: "-100%",
      transition: {
        duration: i * 0.1,
      },
    }),
    show: (i) => ({
      x: 0,
      transition: {
        duration: i * 0.3,
      },
    }),
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true)
  };

  useEffect(() => {

  if(!isOpen){
    setIsMenuOpen(false)
  }
    
  }, [isOpen])


  
  

  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
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
        </div>
        <div>
          <FaAngleDown />
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {route.subRoutes.map((subRoute, i) => {
              return (
                <motion.div variants={menuItemAnimation} custom={i} key={i}>
                  <NavLink
                
                    activeClassName="active"
                    to={subRoute.path}
                    className="link"
                  >
                    <div className="icon">{subRoute.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          className="link_text"
                        >
                          {subRoute.name}
                        </motion.div>
                      )}{" "}
                    </AnimatePresence>
                  </NavLink>
                </motion.div>
              );
            })}
       
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;
