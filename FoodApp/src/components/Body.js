import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from 'react';
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurant, setListOfrestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestraunt] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log(listOfRestaurant)

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

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

    const {loggedInUser, setUserName} = useContext(UserContext)

    if(listOfRestaurant.length === 0) return <Shimmer />

    return (
        <div className='body'>
            <div className='filter flex'>
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={handleChange}/>
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={handleSearch}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className='px-4 py-1 bg-gray-100 rounded-lg' 
                        onClick={handleFilterClick}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName : </label>
                    <input className="border border-black px-2 mx-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                
            </div>
            <div className='flex flex-wrap'>
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            {
                                restaurant.info.isOpen ? (
                                    <RestaurantCardPromoted resData={restaurant}/>
                                ) : ( 
                                    <RestaurantCard resData={restaurant}/>
                                )
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;