import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const Prizes: FC = () => {
  return (
    <div className="prizes-area">
      <Container maxWidth={'xl'}>
        <div className="prizes-area-inside">
          <h3>
            <img src="/images/prizes-title-icon.png" alt=""/>
            Prizes
          </h3>
          <div className="prizes-list">
            <div className="prize-item yellow-bg">
              <h5>Jackpot Winner</h5>
              <p>gets</p>
              <h4>50%</h4>
              <h6>1 winner</h6>
            </div>
            <div className="prize-item blue-bg">
              <h5>Bounty Winners</h5>
              <p>gets</p>
              <h4>5%</h4>
              <h6>10 winner</h6>
            </div>
          </div>
          <p>* All tokens collected from tickets sale will be burned</p>
          <div className="buy-tickets-area">
            <button>Buy tickets</button>
          </div>
          <h6>Ticket price = 1000 $Time</h6>
        </div>
      </Container>
    </div>
  );
}

export default Prizes;