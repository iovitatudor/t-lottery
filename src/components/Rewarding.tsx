import React, {FC} from "react";
import {Container, Grid} from "@mui/material";
import Timer from "./Timer";
import BuyTickets from "./BuyTickets";

interface IRewardingProps {
  poolName: string,
  buyTickets: boolean,
  checkEligibility: boolean,
}

const Rewarding: FC<IRewardingProps> = ({poolName, buyTickets, checkEligibility}) => {
  return (
    <div className="rewarding-area">
      <div className="rewarding-area-inside">
        <Timer/>
        <Container maxWidth={'xl'}>
          <Grid container className="reward-banner">
            <Grid item md={8} xs={12} className="reward-banner-part">
              <h2>10 000 375 $TIME </h2>
              <h4>{poolName} pool</h4>
            </Grid>
            <Grid item md={4} xs={12} className="reward-banner-part">
              <img src="/images/money bag.png" alt=""/>
            </Grid>
            <Grid item md={12} xs={12} className="reward-banner-part">
              {
                buyTickets &&
                 <BuyTickets/>
              }
              {
                checkEligibility &&
                  <div className="buy-tickets-area">
                      <a href="#eligibility">Check eligibility</a>
                  </div>
              }
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Rewarding;