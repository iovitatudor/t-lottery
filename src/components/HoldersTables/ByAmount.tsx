import React, {FC} from "react";

const ByAmount: FC = () => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
        <tr>
          <th>Position</th>
          <th>User Address</th>
          <th>Total tokens</th>
          <th>Hold Time</th>
          <th>Potential winnings</th>
          <th>Eligibility</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>0xF75a9ffE9f9679423423...</td>
          <td>159801</td>
          <td>1D:11H:13M:20S</td>
          <td>23500</td>
          <td><img src="/images/eligible.png" alt=""/></td>
        </tr>
        <tr>
          <td>2</td>
          <td>0xF75a9ffE976864...</td>
          <td>259801</td>
          <td>1D:11H:13M:20S</td>
          <td>23500</td>
          <td><img src="/images/not-eligible.png" alt=""/></td>
        </tr>
        <tr>
          <td>3</td>
          <td>0xF75a9ffE9f967423423...</td>
          <td>154301</td>
          <td>1D:11H:13M:20S</td>
          <td>23500</td>
          <td><img src="/images/eligible.png" alt=""/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
}

export default ByAmount;