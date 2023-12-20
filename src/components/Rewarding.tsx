import React, {FC} from "react";
import {Container, Grid} from "@mui/material";
import Timer from "./Timer";

const Rewarding: FC = () => {
  return (
    <div className="rewarding-area">
      <div className="rewarding-area-inside">
        <div className="countdown">
          {/*<Countdown/>*/}
          <Timer/>
        </div>
        <Container maxWidth={'xl'}>
          <Grid container className="reward-banner">
            <Grid item md={8} className="reward-banner-part">
              <h2>Accumulated Reward Pool so far</h2>
              <h4>
                <img src="/images/logo-time-2.png" alt=""/>
                10 000 375
              </h4>
            </Grid>
            <Grid item md={4} className="reward-banner-part">
              <img src="/images/money bag.png" alt=""/>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Rewarding;