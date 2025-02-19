import { CDN_URL } from "../utils/constants";
import React from "react";
const RestaurantCard = (props) => {
    const{resData} = props
    return (
      <div className="res-card">
        <img
          src={CDN_URL+resData.info.cloudinaryImageId}
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
  export default RestaurantCard
  