import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const TopBar: FC = () => {
  return (
    <div className="top-bar">
      <Container maxWidth={"xl"}>
        <Grid container className="top-bar-inside">
          <Grid item md={2} className="logo">
            <a href="#"><img src="/images/logo.png" alt=""/></a>
          </Grid>
          <Grid item md={6} className="menu-btns">
            <a href="#" className="menu-btn">
              <img src="/images/lottery-btn-icon.png" alt=""/>
              Daily Lottery
            </a>
            <a href="#" className="menu-btn active">
              <img src="/images/jackpod-btn-icon.png" alt=""/>
              Weekly Jackpot
            </a>
            <a href="#" className="menu-btn">
              <img src="/images/rules-btn-icon.png" alt=""/>
              Rules
            </a>
          </Grid>
          <Grid item md={4} className="header-buttons">
            <button className="main-btn blue-btn">Check if You won</button>
            <button className="main-btn yellow-btn">Connect Wallet</button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TopBar;