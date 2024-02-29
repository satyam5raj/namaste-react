import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfrestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestraunt] = useState([]);
    const [searchText, setSearchText] = useState("")

    const handleFilterClick = () => {
        const filteredList = listOfRestaurant.filter(res => parseFloat(res.info.avgRating) > 4.3);
        setListOfrestaurant(filteredList)
        // console.log(filtered); 
    }

    const handleSearch = () => {
        const filteredRestaurant = listOfRestaurant.filter((res) => 
            res.info.name.toLowerCase().includes(searchText.toLowerCase()
        ));
        setFilteredRestraunt(filteredRestaurant)
    }

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

        const json = await data.json();
        // console.log(json)
        setListOfrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }   

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={handleChange}/>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <button className='filter-btn' 
                onClick={handleFilterClick}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;