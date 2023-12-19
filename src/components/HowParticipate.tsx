import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const HowParticipate: FC = () => {
  return (
    <div className="how-participate-area">
      <h3>
        <img src="/images/008-theatre.png" alt=""/>
        How to participate
      </h3>

      <Container maxWidth={'xl'}>
        <Grid container className="participate-conditions">
          <Grid item md={4} xs={12}>
            <img src="/images/participate-icon.png" alt="" className="participate-image"/>
          </Grid>
          <Grid item md={8} xs={12}>
            <p>Welcome to the New Buyers Lottery! This lottery is exclusively for new purchasers. We will randomly
              select 10 winners from users who have bought any quantity of $Time from the end of the previous lottery
              until the conclusion of the current one.</p>
            <h5>To take part:</h5>
            <p>
              <img src="/images/promotion 2.png" alt=""/>
              <b>Purchase any amount of $Time using a new wallet.</b>
            </p>
            <p>
              <small>
                * The accumulated reward pool will be distributed proportionally among the 10 winners based on the
                amount of $Time they hold in their wallets at the end of the current lottery.
              </small>
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HowParticipate;