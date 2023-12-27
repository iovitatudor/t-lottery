import React, {FC} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Close} from '@mui/icons-material';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const BuyTickets: FC = () => {
  const [open, setOpen] = React.useState(false);
  const [number, setNumber] = React.useState('1');

  const handleChange = (event: SelectChangeEvent) => {
    setNumber(event.target.value as string);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="buy-tickets-area">
      <button onClick={handleOpen}>Buy tickets</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="tickets-modal">
          <Typography id="modal-modal-title" variant="h6" component="h2" className="model-header">
            Buy Tickets
            <span onClick={handleClose}><Close/></span>
          </Typography>
          <Typography id="modal-modal-description" sx={{mt: 2}} className="model-body">
            <label htmlFor="quantity-select"> Select Tickets Quantity</label>
            <Select
              labelId="demo-simple-select-label"
              id="quantity-select"
              value={number}
              label="quantity"
              onChange={handleChange}
              className="select-tickets"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>

            <div className="modal-options">
              <p>Cost ($TIME)</p>
              <p>0 $TIME</p>
            </div>
            <div className="break"></div>
            <div className="modal-options">
              <p>You Pay</p>
              <p><b>43 $TIME</b></p>
            </div>
            <div className="buy-tickets-area" style={{paddingTop: '40px'}}>
              <button onClick={handleOpen}>Connect Wallet</button>
            </div>
          </Typography>
          {/*<Typography id="modal-modal-description" sx={{mt: 2}} className="model-success">*/}
          {/*  <img src="/images/dollar.png" alt=""/>*/}
          {/*  <p>you have successfully purchased</p>*/}
          {/*  <p><span>34 tickets</span></p>*/}
          {/*  <div className="buy-tickets-area" style={{paddingTop: '40px'}}>*/}
          {/*    <button onClick={handleClose}>OK</button>*/}
          {/*  </div>*/}
          {/*</Typography>*/}
        </Box>
      </Modal>
    </div>
  );
}

export default BuyTickets;