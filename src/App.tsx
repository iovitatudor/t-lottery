import React from 'react';
import './styles/desktop.scss';
import './styles/mobile.scss';
import TopBar from "./components/TopBar";
import TopBarMobile from "./components/TopBarMobile";
import Banner from "./components/Banner";
import Rewarding from "./components/Rewarding";
import HolderTable from "./components/HolderTable";
import CheckEligibility from "./components/CheckEligibility";
import HowParticipate from "./components/HowParticipate";
import TableList from "./components/Tables/TableList";
import {BrowserView, MobileView} from 'react-device-detect';

const App = () => {
  return (
    <div className="App">
      <BrowserView><TopBar/></BrowserView>
      <MobileView><TopBarMobile/></MobileView>
      <Banner/>
      <Rewarding/>
      <HolderTable/>
      <CheckEligibility/>
      <HowParticipate/>
      <TableList/>
    </div>
  );
}

export default App;
