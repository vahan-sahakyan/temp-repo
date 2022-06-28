import React from 'react';
import './Table.scss';

const Table = () => (
  <>
    {/* ELEM TABLE -- START */}
    <h4 className="table-header">Approved Reports</h4>
    <div className="scroll-x">
      <table>
        <thead>
          <tr>
            <th>DRUG</th>
            <th>EVENT</th>
            <th>
              STATUS
              <i className="fa-solid fa-chevron-down"></i>
            </th>
            <th>
              FATAL SINCE 2022 Q1
              <i className="fa-solid fa-chevron-down"></i>
            </th>
            <th>
              FATAL SINCE 2022 Q2
              <i className="fa-solid fa-chevron-down"></i>
            </th>
            <th>COMMENTS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paracetamol</td>
            <td>Diarrhea</td>
            <td>Alert</td>
            <td>13</td>
            <td>212</td>
            <td>Pending Further info</td>
          </tr>
          <tr>
            <td>Paracetamol</td>
            <td>Diarrhea</td>
            <td>Alert</td>
            <td>10</td>
            <td>221</td>
            <td>Of Note</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* TABLE -- END */}

    {/* ELEM TABLE -- START */}
    <h4 className="table-header">Signals</h4>
    <div style={{ marginBottom: '12px' }} className="scroll-x">
      <table>
        <thead>
          <tr>
            <th>DRUG</th>
            <th>EVENT</th>
            <th>
              STATUS
              <i className="fa-solid fa-chevron-down"></i>
            </th>
            <th>
              FATAL SINCE 2022 Q1
              <i className="fa-solid fa-chevron-down"></i>
            </th>
            <th>
              FATAL SINCE 2022 Q2
              <i className="fa-solid fa-chevron-down"></i>
            </th>
            <th>COMMENTS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paracetamol</td>
            <td>Diarrhea</td>
            <td>Alert</td>
            <td>13</td>
            <td>212</td>
            <td>Pending Further info</td>
          </tr>
          <tr>
            <td>Paracetamol</td>
            <td>Diarrhea</td>
            <td>Alert</td>
            <td>10</td>
            <td>221</td>
            <td>Of Note</td>
          </tr>
          <tr>
            <td>Paracetamol</td>
            <td>Diarrhea</td>
            <td>Alert</td>
            <td>10</td>
            <td>133</td>
            <td>Pending Further info</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* TABLE -- END */}
  </>
);

export default Table;
