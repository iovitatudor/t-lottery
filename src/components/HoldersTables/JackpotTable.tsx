import React, {FC} from "react";

const JackpotTable: FC = () => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
        <tr>
          <th>Position</th>
          <th>User Address</th>
          <th>Tickets</th>
          <th>Potential winnings</th>
          <th>Eligibility</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>0xF75a9ffE9f9679423423...</td>
          <td>150</td>
          <td>18%</td>
          <td><img src="/images/eligible.png" alt=""/></td>
        </tr>
        <tr>
          <td>2</td>
          <td>0xF75a9ffE976864...</td>
          <td>150</td>
          <td>18%</td>
          <td><img src="/images/not-eligible.png" alt=""/></td>
        </tr>
        <tr>
          <td>3</td>
          <td>0xF75a9ffE9f967423423...</td>
          <td>150</td>
          <td>18%</td>
          <td><img src="/images/eligible.png" alt=""/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
}

export default JackpotTable;