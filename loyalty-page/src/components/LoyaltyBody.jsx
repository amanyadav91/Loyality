import React from 'react';
import './LoyaltyProgramDashboard.css';

const pointsData = [
  {
    description: 'Total Points (All Time)',
    points: 9380,
    value: 938.00,
    source: 'Purchasing products',
    sourcePoints: 8900,
  },
  {
    description: 'Unclaimed Points',
    points: 9380,
    value: 938.00,
    source: 'Leaving a product review',
    sourcePoints: 100,
  },

];

const LoyaltyProgramDashboard = () => {
  return (
      <>
      <div className='Container'>
      <div className="sidebar">sidebar</div><div className="loyalty-program-dashboard">
      <div className="header">
        <h1>Loyalty Program Dashboard</h1>
        <div className='dashboard'>
          <nav>
            <ul>
              <button className='btn1'><li>Customers</li></button>
              <button className='btn2'><li>Settings</li></button>
              <button className='btn3'><li>License</li></button>
            </ul>
          </nav>
        </div>
      </div>
      <div className="main-content">
        <div className="points-status">
          <h2>Points Status</h2>
          <div className="points-summary">
            <p>
              Total Points: <span>{pointsData[0].points}</span> ({pointsData[0].value})
            </p>
          </div>
          <div className="points-table">
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Points</th>
                  <th>Value</th>
                  <th>Source</th>
                  <th>Points from Source</th>
                </tr>
              </thead>
              <tbody>
                {pointsData.map((point) => (
                  <tr key={point.description}>
                    <td>{point.description}</td>
                    <td>{point.points}</td>
                    <td>${point.value}</td>
                    <td>{point.source}</td>
                    <td>{point.sourcePoints}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="points-sources">
          <h2>Points Sources</h2>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Points</th>
                <th>Value</th>
                <th>Source</th>
                <th>Points from Source</th>
              </tr>
            </thead>
            <tbody>
              {pointsData.map((point) => (
                <tr key={point.description}>
                  <td>{point.description}</td>
                  <td>{point.points}</td>
                  <td>${point.value}</td>
                  <td>{point.source}</td>
                  <td>{point.sourcePoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div></>

  );
};

export default LoyaltyProgramDashboard;
