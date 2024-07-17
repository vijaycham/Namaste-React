import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
const Body = () => (
  <div className="body">
    <div className="search-container">
      <input type="text" placeholder="Search for restaurants" />
    </div>
    <div className="restaurant-container">
      {resList.map((restaurant) => (
        <RestaurantCard resData={restaurant} />
      ))}
    </div>
  </div>
);

export default Body;