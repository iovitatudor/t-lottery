import React, {FC} from "react";
import TopBar from "../components/TopBar";
import TopBarMobile from "../components/TopBarMobile";
import Banner from "../components/Banner";
import Rewarding from "../components/Rewarding";
import TableList from "../components/Tables/TableList";
import {BrowserView, MobileView} from 'react-device-detect';
import Prizes from "../components/Prizes";
import HolderTableJackpot from "../components/HolderTableJackpot";
import ParticipateEligibilityJackpot from "../components/ParticipateEligibilityJackpot";

const Jackpot: FC = () => {
  return (
    <>
      <BrowserView><TopBar/></BrowserView>
      <MobileView><TopBarMobile/></MobileView>
      <Banner/>
      <Rewarding/>
      <Prizes/>
      <HolderTableJackpot/>
      <ParticipateEligibilityJackpot/>
      <TableList/>
    </>
  );
}

export default Jackpot;