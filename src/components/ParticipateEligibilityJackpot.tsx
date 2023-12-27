import React, {FC} from "react";
import {Container, Grid} from "@mui/material";
import BuyTickets from "./BuyTickets";

const ParticipateEligibilityJackpot: FC = () => {
  return (
    <div className="participate-eligibility-jackpot-area">
      <Container maxWidth={'xl'}>
        <h3>How to participate</h3>
        <Grid container className="participate-steps">
          <Grid item md={4} xs={12}>
            <div className="step-item">
              <h5>Step 1</h5>
              <img src="/images/step1PEJ.png" alt=""/>
              <p>Connect with Your Wallet</p>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="step-item">
              <h5>Step 2</h5>
              <img src="/images/step2-PEJ.png" alt=""/>
              <p>Buy lottery tickets below (more tickets You buy more chances You have to win)</p>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="step-item">
              <h5>Step 3</h5>
              <img src="/images/step3PEJ.png" alt=""/>
              <p>Be on this page when the timer above ends to watch the live prize drawing</p></div>
          </Grid>
          <Grid item md={12} xs={12}>
            <BuyTickets/><br/><br/>
          </Grid>
        </Grid>
        <h3>Check to see Your eligibility</h3>
        <Grid container className="eligibility-steps">
          <Grid item md={4} xs={12}>
            <div className="step-item">
              <h5>Step 1</h5>
              <img src="/images/step1PEJ.png" alt=""/>
              <p>Connect with Your Wallet</p>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="step-item">
              <h5>Step 2</h5>
              <img src="/images/step2.2PEJ.png" alt=""/>
              <p> Hit the Search button</p>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="step-item">
              <h5>Step 3</h5>
              <img src="/images/step3.1PEJ.png" alt=""/>
              <p> And see if You are eligible and the estimation of Your chances to win the prize</p></div>
          </Grid>
          <Grid item md={12} xs={12}>
            <BuyTickets/>
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default ParticipateEligibilityJackpot;