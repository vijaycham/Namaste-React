import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";

const Body = () => {
  const [listofrestaruants, setlistofrestaruants] = useState([ ]);

  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9808742&lng=80.2402866&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json.data.cards);
     setlistofrestaruants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofrestaruants.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log("button clicked");
            setlistofrestaruants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listofrestaruants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
