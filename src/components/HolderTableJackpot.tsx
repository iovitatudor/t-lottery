import React, {FC} from "react";
import {Container, Grid} from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import ByAmount from "./HoldersTables/ByAmount";
import TopHolders from "./HoldersTables/TopHolders";
import Newbuyers from "./HoldersTables/Newbuyers";
import Random from "./HoldersTables/Random";
import {MobileView, BrowserView} from "react-device-detect";

const HolderTableJackpot: FC = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="holder-table-area jackpot-style">
      <div className="holder-table-area-inside">
        <Container maxWidth={"xl"}>
          <div className="table-wrapper">
            <Grid container>
              <Grid item md={12} xs={12}>
                <Box className="table-inside">
                  <TabContext value={value}>
                    <div className="tabs-area">
                      <h3><img src="/images/holder-list-icon.png" alt=""/>Holders Table</h3>
                      <Box>
                          <BrowserView className="search-wrapper">
                            <input type="text" value="Search..." className="search-input"/>
                          </BrowserView>
                      </Box>
                      <MobileView><input type="text" value="Search..." className="search-input"/></MobileView>
                    </div>
                    <TabPanel value="1"><ByAmount/></TabPanel>
                    <TabPanel value="2"><TopHolders/></TabPanel>
                    <TabPanel value="3"><Newbuyers/></TabPanel>
                    <TabPanel value="4"><Random/></TabPanel>
                  </TabContext>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  )
    ;
}

export default HolderTableJackpot;