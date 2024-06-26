import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="grid-container">
      <div className="ptp">PTP</div>
      <div className="username">
        <div>UserName</div>
        <div>XP bar</div>
      </div>
      <div className="resource-bar">Resource Bar</div>
      <div className="button battle">Battle</div>
      <div className="button breeding">Breeding</div>
      <div className="button resources">Resources</div>
      <div className="button marketplace">Marketplace</div>
      <div className="button limited-event">Limited Time Event</div>
      <div className="button huge-event">Huge Event</div>
      <div className="button daily-rewards">Daily Rewards</div>
      <div className="button inventory">Inventory</div>
      <div className="button community">Community</div>
      <div className="button essence">Essence</div>
      <div className="button library">Library</div>
      <div className="button missions">Missions</div>
    </div>
  );
};

export default Dashboard;
