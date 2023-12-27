import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Lottery from "./pages/Lottery";
import Jackpot from "./pages/Jackpot";
import './styles/desktop.scss';
import './styles/mobile.scss';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route>
              <Route path="/" element={<Lottery/>}/>
              <Route path="/jackpot" element={<Jackpot/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
