import React, {FC} from "react";
import TopBar from "../components/TopBar";
import TopBarMobile from "../components/TopBarMobile";
import Banner from "../components/Banner";
import Rewarding from "../components/Rewarding";
import HolderTable from "../components/HolderTable";
import CheckEligibility from "../components/CheckEligibility";
import HowParticipate from "../components/HowParticipate";
import TableList from "../components/Tables/TableList";
import {BrowserView, MobileView} from 'react-device-detect';

const Lottery: FC = () => {
  return (
    <>
      <BrowserView><TopBar/></BrowserView>
      <MobileView><TopBarMobile/></MobileView>
      <Banner/>
      <Rewarding poolName="Lottery" buyTickets={false} checkEligibility={true}/>
      <HolderTable/>
      <CheckEligibility/>
      <HowParticipate/>
      <TableList/>
    </>
  );
}

export default Lottery;