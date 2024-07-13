import React from "react";
import ReactDOM from "react-dom/client";

/* PLANNING
Header
- logo
- Navigation items
Body
 - search
 - Restaurant container
   - restaurant list
     - restaurant card
       - restaurant name
       - restaurant star rating
       - restaurant cuisines 
       - restaurant review count
       - restaurant price range
       - restaurant image
       - delivery time
   - pagination
Footer
 - social media icons
 - copyright notice
 - links
 - address
 - contact
 */

// Step 1: Create the Layout component

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://fbcd.co/images/products/4d8390472d71fd01cb4c2bcbf90a43ec_resize.jpg"
      />
    </div>
    <nav className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
);

const RestaurantCard = (props) => {
  // destructed way is best
  // const { resName, cuisine } = props;
  const { resData } = props;
  return (
    <div className="restaurant-cards">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uwi6yfxyww0i7r9erj68"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.avgRating} star</h4>
      <h4>{resData.info.costForTwo} </h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};
// even we can use props like this
{
  /* <h3>props.resName</h3>
      <h4>props.cuisine</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div> */
}
const resObj = {
  info: {
    id: "440729",
    name: "Pallavaran Yaa Mohaideen Biriyani",
    cloudinaryImageId: "uoubsptehcwwgipkoxth",
    locality: "Trichy Main Road",
    areaName: "Viluppuram Town",
    costForTwo: "₹400 for two",
    cuisines: ["Biryani", "Tandoor", "Chinese", "Indian", "South Indian"],
    avgRating: 4.3,
    parentId: "269276",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 15,
      lastMileTravel: 1.8,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "1.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-07-13 22:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-de015ca1-9a8f-4be8-b7b4-11aba5757698",
  },
  cta: {
    link: "https://www.swiggy.com/restaurants/pallavaran-yaa-mohaideen-biriyani-trichy-main-road-viluppuram-town-viluppuram-440729",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

const Body = () => (
  <div className="body">
    <div className="search-container">
      <input type="text" placeholder="Search for restaurants" />
    </div>
    <div className="restaurant-container">
      <RestaurantCard resData={resObj} />
    </div>
  </div>
);
const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
