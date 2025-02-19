import React from "react";
import ReactDOM from "react-dom/client";
import { resData } from "./resData";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://dvm9jp3urcf0o.cloudfront.net/logo-ideas/business-logo-ideas/Pro/food-delivery-business.png"
          className="logo"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const{resData} = props
  return (
    <div className="res-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${resData.info.cloudinaryImageId}`}
        className="res-logo"
        alt=""
      />
      
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.cuisines.slice(0,2)}</h4>
      <h4>{resData.info.costForTw}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

const Body = () => {
  
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData.map(res=><RestaurantCard key={res.info.id} resData={res} />)}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
