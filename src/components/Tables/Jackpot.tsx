import React, {FC} from "react";

const Jackpot: FC = () => {
  return (
    <div className="jackpot-area">
      <div className="jackpot-details">
        <p>Round <span>110</span></p>
        <p>Lottery Type: <b>Jackpot</b></p> <br/>
        <p><small>Drawn Dec 15, 2023, 2:00 AM</small></p>
        <p><i>Prize Pot: 35 657 940 $Time</i></p>
      </div>

      <div className="jackpot-area-inside">
        <table className="table">
          <thead>
          <tr>
            <th>Prize</th>
            <th>Winning number</th>
            <th>Tokens Won</th>
            <th>Winning Wallet</th>
            <th>TX hash</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <img src="/images/prize-1.png" alt=""/>
            </td>
            <td>
              <span className="ball yellow-ball">1</span>
              <span className="ball red-ball">2</span>
              <span className="ball green-ball">4</span>
              <span className="ball yellow-ball">1</span>
              <span className="ball red-ball">2</span>
              <span className="ball green-ball">4</span>
            </td>
            <td>135000</td>
            <td>0x77785...296D04</td>
            <td>TX Hash</td>
          </tr>
          <tr>
            <td>
              <img src="/images/prize-2.png" alt=""/>
            </td>
            <td>
              <span className="ball orange-ball">2</span>
              <span className="ball pink-ball">7</span>
              <span className="ball yellow-ball">9</span>
              <span className="ball orange-ball">2</span>
              <span className="ball pink-ball">7</span>
              <span className="ball yellow-ball">9</span>
            </td>
            <td>135000</td>
            <td>0x77785...296D04</td>
            <td>TX Hash</td>
          </tr>
          <tr>
            <td>
              <img src="/images/prize-3.png" alt=""/>
            </td>
            <td>
              <span className="ball green-ball">4</span>
              <span className="ball pink-ball">3</span>
              <span className="ball red-ball">2</span>
              <span className="ball green-ball">4</span>
              <span className="ball pink-ball">3</span>
              <span className="ball red-ball">2</span>
            </td>
            <td>135000</td>
            <td>0x77785...296D04</td>
            <td>TX Hash</td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Jackpot;