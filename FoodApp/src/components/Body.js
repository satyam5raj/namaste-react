import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfrestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestraunt] = useState([]);
    const [searchText, setSearchText] = useState("")

    const handleFilterClick = () => {
        const filteredList = listOfRestaurant.filter(res => parseFloat(res.info.avgRating) > 4.3);
        // setListOfrestaurant(filteredList)
        setFilteredRestraunt(filteredList)
        // console.log(filteredList); 
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
        const data = await fetch(RESTAURANT_API)

        const json = await data.json();
        // console.log(json)
        setListOfrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }   

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you're Offline!! Please check your internet connection</h1>

    if(listOfRestaurant.length === 0) return <Shimmer />

    return (
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
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            <RestaurantCard resData={restaurant}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;