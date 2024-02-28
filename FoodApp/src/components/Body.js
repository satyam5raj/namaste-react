import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from 'react'

const Body = () => {
    const [listOfRestaurant, setListOfrestaurant] = useState(resList);

    const handleFilterClick = () => {
        const filteredList = listOfRestaurant.filter(res => parseFloat(res.info.avgRating) > 4.3);
        setListOfrestaurant(filteredList)
        // console.log(filtered); 
    }

    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' 
                onClick={handleFilterClick}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {
                    listOfRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;