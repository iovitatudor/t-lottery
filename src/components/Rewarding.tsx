import React, {FC} from "react";
import {Container, Grid} from "@mui/material";
import Timer from "./Timer";

const Rewarding: FC = () => {
  return (
    <div className="rewarding-area">
      <div className="rewarding-area-inside">
        <div className="countdown">
          <Timer/>
        </div>
        <Container maxWidth={'xl'}>
          <Grid container className="reward-banner">
            <Grid item md={8} xs={12} className="reward-banner-part">
              <h2>10 000 375 $TIME </h2>
              <h4>jackpot pool</h4>
            </Grid>
            <Grid item md={4} xs={12} className="reward-banner-part">
              <img src="/images/money bag.png" alt=""/>
            </Grid>
            <Grid item md={12} xs={12} className="reward-banner-part">
              <div className="buy-tickets-area">
                <button>Buy tickets</button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Rewarding;