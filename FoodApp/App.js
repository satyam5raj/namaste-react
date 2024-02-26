import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' 
                src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    return (
        <div className='res-card'>
            <img
                className='res-logo'
                alt='res-logo' 
                src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gehax5kizfwncsgkris2'
            >
            </img>
            <h3>{props.resName}</h3>
            <h4>{props.cusine}</h4>
            <h4>4.5 star</h4>
            <h4>20 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard resName = "Meghna Foods" cusine = "Biryani, North Indian, Asian"/>
                <RestaurantCard resName = "KFC" cusine = "Burgar, Fast Food"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />)