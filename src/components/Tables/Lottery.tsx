import React, {FC} from "react";

const Lottery: FC = () => {
  return (
    <div className="lottery-area">
      <table className="table">
        <thead>
        <tr>
          <th style={{textAlign: 'left'}}>Position</th>
          <th>User Address</th>
          <th>Tokens Won</th>
          <th>Transaction Hash</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{textAlign: 'left'}}>
            <span className="star-position">1</span>
          </td>
          <td>
            0xF75a9ffE9f967099599fb0Dec2d75dFBabE1779e
          </td>
          <td>159801</td>
          <td>TX Hash</td>
        </tr>
        <tr>
          <td style={{textAlign: 'left'}}>
            <span className="star-position">2</span>
          </td>
          <td>
            0xF75a9ffE9f967099599fb0Dec2d75dFBabE1779e
          </td>
          <td>159801</td>
          <td>TX Hash</td>
        </tr>
        <tr>
          <td style={{textAlign: 'left'}}>
            <span className="star-position">3</span>
          </td>
          <td>
            0xF75a9ffE9f967099599fb0Dec2d75dFBabE1779e
          </td>
          <td>159801</td>
          <td>TX Hash</td>
        </tr>
        <tr>
          <td style={{textAlign: 'left'}}>
            <span className="star-position">4</span>
          </td>
          <td>
            0xF75a9ffE9f967099599fb0Dec2d75dFBabE1779e
          </td>
          <td>159801</td>
          <td>TX Hash</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Lottery;