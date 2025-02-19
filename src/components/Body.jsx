import { resData } from "../utils/resData";
import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    console.log("body rendered");
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res, idx) => (
          <RestaurantCard key={idx} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
