import React, {FC, useState} from "react";
import {Container, Grid} from "@mui/material";
import {NavLink, useLocation} from "react-router-dom";

const TopBarMobile: FC = () => {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const [burgherClass, setBurgherClass] = useState('');
  const [drawerClass, setDrawerClass] = useState('');

  const handleBurgher = () => {
    if (burgherClass === 'open') {
      setBurgherClass('');
      setDrawerClass('');
    } else {
      setBurgherClass('open');
      setDrawerClass('open-drawer');
    }
  }

  const disableDrawer = () => {
    setBurgherClass('');
    setDrawerClass('');
  }

  return (
    <div className="top-bar">
      <Container maxWidth={"xl"}>
        <Grid container className="top-bar-inside">
          <Grid item md={2} xs={6} className="logo">
            <a href="#"><img src="/images/logo.png" alt=""/></a>
          </Grid>

          <Grid item md={4} xs={6} className="burgher-area">
            <div id="nav-icon3" onClick={handleBurgher} className={burgherClass}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={"drawer " + drawerClass}>
              <NavLink to={'/'} className={splitLocation[1] === "/" ? "active menu-btn" : "menu-btn"}>
                Daily Lottery
              </NavLink>
              <NavLink to={'/jackpot'}  className={splitLocation[1] === "jackpot" ? "active menu-btn" : "menu-btn"}>
                Weekly Jackpot
              </NavLink>
              <a href="#roadmap" className="menu-btn" onClick={disableDrawer}>Rules</a>
            </div>
          </Grid>
          <Grid item md={4} xs={12} className="header-buttons">
            <button className="main-btn blue-btn">Check if You won</button>
            <button className="main-btn yellow-btn">Connect Wallet</button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TopBarMobile;