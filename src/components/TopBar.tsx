import React, {FC} from "react";
import {Container, Grid} from "@mui/material";
import {NavLink, Link, useLocation} from "react-router-dom";

const TopBar: FC = () => {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div className="top-bar">
      <Container maxWidth={"xl"}>
        <Grid container className="top-bar-inside">
          <Grid item md={2} className="logo">
            <Link to={'/'}><img src="/images/logo.png" alt=""/></Link>
          </Grid>
          <Grid item md={6} className="menu-btns">
            <NavLink to={'/'} className={splitLocation[1] === "/" ? "active menu-btn" : "menu-btn"}>
              <img src="/images/lottery-btn-icon.png" alt=""/>
              Daily Lottery
            </NavLink>
            <NavLink to={'/jackpot'}  className={splitLocation[1] === "jackpot" ? "active menu-btn" : "menu-btn"}>
              <img src="/images/jackpod-btn-icon.png" alt=""/>
              Weekly Jackpot
            </NavLink>
            <a href="#" className="menu-btn">
              <img src="/images/rules-btn-icon.png" alt=""/>
              Rules
            </a>
          </Grid>
          <Grid item md={4} className="header-buttons">
            <a href="#tab-list" className="main-btn blue-btn">Check if You won</a>
            <a href="#" className="main-btn yellow-btn">Connect Wallet</a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TopBar;