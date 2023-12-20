import React, {FC} from "react";

const Winnings: FC = () => {
  return (
    <div className="history-area">
      <h4>Your Winnings</h4>
      <div className="history-area-inside">
        <div className="history-area-scroll">
          <table className="table">
            <thead>
            <tr>
              <th style={{textAlign: 'left'}}>Prize</th>
              <th>Drawn</th>
              <th>Winning number</th>
              <th>Winning Wallet</th>
              <th>TX hash</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td style={{textAlign: 'left'}}>Golden Jackpot</td>
              <td>12/15/2023 2:00:00</td>
              <td>
                <span className="ball yellow-ball">1</span>
                <span className="ball red-ball">2</span>
                <span className="ball green-ball">4</span>
                <span className="ball yellow-ball">1</span>
                <span className="ball red-ball">2</span>
                <span className="ball green-ball">4</span>
              </td>
              <td>135000</td>
              <td>TX Hash</td>
            </tr>
            <tr>
              <td style={{textAlign: 'left'}}>Silver Cup</td>
              <td>12/15/2023 2:00:00</td>
              <td>
                <span className="ball orange-ball">2</span>
                <span className="ball pink-ball">7</span>
                <span className="ball yellow-ball">9</span>
                <span className="ball orange-ball">2</span>
                <span className="ball pink-ball">7</span>
                <span className="ball yellow-ball">9</span>
              </td>
              <td>135000</td>
              <td>TX Hash</td>
            </tr>
            <tr>
              <td style={{textAlign: 'left'}}>Bronze Bounty</td>
              <td>12/15/2023 2:00:00</td>
              <td>
                <span className="ball green-ball">4</span>
                <span className="ball pink-ball">3</span>
                <span className="ball red-ball">2</span>
                <span className="ball green-ball">4</span>
                <span className="ball pink-ball">3</span>
                <span className="ball red-ball">2</span>
              </td>
              <td>135000</td>
              <td>TX Hash</td>
            </tr>
            <tr>
              <td style={{textAlign: 'left'}}>Bronze Bounty</td>
              <td>12/15/2023 2:00:00</td>
              <td></td>
              <td>135000</td>
              <td>TX Hash</td>
            </tr>
            <tr>
              <td style={{textAlign: 'left'}}>Top Owners Lottery</td>
              <td>12/15/2023 2:00:00</td>
              <td></td>
              <td>135000</td>
              <td>TX Hash</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="buy-tickets-area">
          {/*<img src="/images/020-bell.png" alt=""/>*/}
          {/*<h6>No winnings Yet</h6>*/}
          <p>Buy tickets for the next round!</p>
          <button>Buy tickets</button>
        </div>
      </div>
    </div>
  )
}

export default Winnings;