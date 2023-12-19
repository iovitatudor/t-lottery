import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const CheckEligibility: FC = () => {
  return (
    <div className="check-eligibility-area">
      <h3>
        <img src="/images/017-checked.png" alt=""/>Check to see Your eligibility
      </h3>

      <Container maxWidth={'xl'}>
        <Grid container>
          <Grid item md={4} xs={12}>
            <div className="eligibility-item">
              <img src="/images/eligibility-item-1.png" alt=""/>
              <p>Connect with Your Wallet</p>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="eligibility-item">
              <img src="/images/eligibility-item-2.png" alt=""/>
              <p>Apply the filter in the Hodlers Table that matches the current lottery</p>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="eligibility-item">
              <img src="/images/eligibility-item-3.png" alt=""/>
              <p>Hit the Search button</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CheckEligibility;