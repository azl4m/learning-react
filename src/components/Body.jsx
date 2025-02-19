import { resData } from "../utils/resData";
import React from "react";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    console.log(resData);
    
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resData.map(res=><RestaurantCard key={res.info.id} resData={res} />)}
        </div>
      </div>
    );
  };

  export default Body