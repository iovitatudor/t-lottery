import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const Banner: FC = () => {
  return (
    <div className="banner-area">
      <Container maxWidth={'xl'}>
        <Grid container>
          <Grid item md={12}>
            <img src="/images/main-banner.png" alt=""/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;