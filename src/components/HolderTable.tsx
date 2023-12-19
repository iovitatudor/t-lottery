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

const HolderTable: FC = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="holder-table-area">
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
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                          <Tab label="Top Holders by Amount" value="1"/>
                          <Tab label="Top Hodlers by Time" value="2"/>
                          <Tab label="New Buyers" value="3"/>
                          <Tab label="Random" value="4"/>
                          <input type="text" value="Search..." className="search-input"/>
                        </TabList>
                      </Box>
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

export default HolderTable;