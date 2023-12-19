import React, {FC} from "react";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import {Container} from "@mui/material";
import Lottery from "./Lottery";
import Jackpot from "./Jackpot";
import History from "./History";

const TableList: FC = () => {
  const [tabValue, setTabValue] = React.useState('jackpot');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <div className="table-list-area">
      <Container maxWidth={'xl'}>
        <TabContext value={tabValue}>
          <Box>
            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
              <Tab label="JackPot" value="jackpot"/>
              <Tab label="Lottery" value="lottery"/>
              <Tab label="History" value="history"/>
            </TabList>
          </Box>
          <TabPanel value="jackpot">
            <Jackpot/>
          </TabPanel>
          <TabPanel value="lottery">
            <Lottery/>
          </TabPanel>
          <TabPanel value="history">
            <History/>
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
}

export default TableList;