import React from 'react'
import './LandingPage.css'

class LandingPage extends React.Component {
    render(){
        return(
            <>
            <header>
                <img className="logo" src={require('../images/logo.svg')} alt="logo" />
                <h3>Fresh Grocery</h3>
                <h6>Stay Home, Stay Safe</h6>
                <button className="signup-btn">Signup</button>
                <button className="login-btn">Log in</button>
                <img className="menu-btn" src={require('../images/menu-btn.svg')} alt="menu" />
            </header>
            <div className="basic-info">
                <h1>Stay Home We'll Deliver</h1>
                <p>Get your groceries delivered in less than an hour</p>
                <input className="search" type="search" placeholder="Search for a location" />
                <div className="cities">
                    <h6>NEW YORK</h6>
                    <h6>LOS ANGELES</h6>
                    <h6>CHICAGO</h6>
                    <h6>HOUSTON</h6>
                    <h6>PHOENIX</h6>
                    <h6>PHILADELPHIA</h6>
                    <h6>SAN ANTONIO</h6>
                </div>
            </div>
            <div className="delivery-details">
                <div className="delivery-text">
                    <p className="mini-heading">#GroceryDeliveredSafely</p>
                    <h1>Hygienically Packed, Safely Delivered</h1>
                    <button className="learn-btn">Learn More</button>
                </div>
                <div className="delivery-img">
                    <img className="del-boy" src={require('../images/delivery-boy.svg')} alt="del-boy" />
                </div>
                <div className="delivery-options">
                    <div className="options">
                        <img className="tick" src={require('../images/Tick.svg')} alt="tick" />
                        <h5>Zero touch delivery options</h5>
                    </div>
                    <div className="options">
                        <img className="tick" src={require('../images/Tick.svg')} alt="tick" />
                        <h5>Regular cleaning of warehouses</h5>
                    </div>
                    <div className="options">
                        <img className="tick" src={require('../images/Tick.svg')} alt="tick" />
                        <h5>Fever screening of all executives</h5>
                    </div>
                </div>
            </div>
            <div className="quick-searches">
                <p className="quick-search-heading">Here's what you need</p>
                <h1>Quick Searches</h1>
                <div className="searches">
                    <div className="search-items">
                        <img className="item-img" src={require('../images/groceries-icon.svg')} alt="groceries" />
                        <h5>Grocery & Staples</h5>
                    </div>
                    <div className="search-items">
                        <img className="item-img" src={require('../images/vegetables.svg')} alt="vegetables" />
                        <h5>Vegetables & Fruits</h5>
                    </div>
                    <div className="search-items">
                        <img className="item-img" src={require('../images/personal-care.svg')} alt="personal-care" />
                        <h5>Personal care</h5>
                    </div>
                    <div className="search-items">
                        <img className="item-img" src={require('../images/home-kitchen.svg')} alt="home-kitchen" />
                        <h5>Home & Kitchen</h5>
                    </div>
                    <div className="search-items">
                        <img className="item-img" src={require('../images/beverages.svg')} alt="beverages" />
                        <h5>Beverages</h5>
                    </div>
                </div>
                <div className="explore-div">
                    <button className="explore-btn">Explore More</button>
                </div>
            </div>
            <div className="order-details">
                <p className="order-details-heading">Get delivered in three easy steps</p>
                <h1>Here's how it works</h1>
                <div className="order-first-step">
                    <img className="request" src={require('../images/request.svg')} alt="request" />
                    <div className="first-step">
                        <img className="one-icon" src={require('../images/one.svg')} alt="one-icon" />
                        <h3>Request in the app</h3>
                    </div>
                    <h5>Set your delivery location, Choose your groceries from a wide range of 5000+ products.</h5>
                    <img className="app-link" src={require('../images/apps-link.svg')} alt="app-link" />
                </div>
                <div className="order-second-step">
                    <div className="pay-img">
                        <img className="schedule-pay" src={require('../images/schedule-pay.svg')} alt="schedule-pay" />
                    </div>
                    <div className="pay-text">
                        <div className="second-step">
                            <img className="two-icon" src={require('../images/two.svg')} alt="two-icon" />
                            <h3>Schedule and Pay</h3>
                        </div>
                        <h5>Schedule the delivery at your convenient time and pay digitally</h5>
                    </div>
                </div>
                <div className="order-third-step">
                    <div className="del-img">
                        <img className="delivered" src={require('../images/delivered.svg')} alt="delivered" />
                    </div>
                    <div className="del-text">
                        <div className="third-step">
                            <img className="three-icon" src={require('../images/three.svg')} alt="three-icon" />
                            <h3>It's delivered and Rate us</h3>
                        </div>
                        <h5>Collect groceries at your doorstep and tell us about our service</h5>
                    </div>
                </div>
            </div>
            <div className="delivery-highlights">
                <p className="delivery-heading">Why Choose Fresh Grocery</p>
                <h1>Because We are in it together</h1>
                <div className="del-details">
                    <div className="min-order">
                        <img className="no-min-order" src={require('../images/no-min-order.svg')} alt="no-min-order" />
                        <h3>No Minimum Order</h3>
                        <h5>No order value restrictions, Order for yourself or your group</h5>
                    </div>
                    <div className="live-order-tracking">
                        <img className="live-track" src={require('../images/live-track.svg')} alt="live-track" />
                        <h3>Live Order Tracking</h3>
                        <h5>Track your order anytime from the store to your doorstep</h5>
                    </div>
                    <div className="delivery-bike">
                        <img className="bike" src={require('../images/bike.svg')} alt="bike" />
                        <h3>24 X 7 Delivery</h3>
                        <h5>Order anytime, anywhere. We will get you delivered</h5>
                    </div>
                </div>
            </div>
            <div className="become-partner">
                <div className="become-partner-img">
                    <img className="partner-img" src={require('../images/partner-img.svg')} alt="partner-img" />
                </div>
                <div className="become-partner-text">
                    <h1>Become a Partner and start earning!</h1>
                    <h3>You can login and logout whenever you want! No mandatory timings!</h3>
                    <div className="partner-btn-div">
                        <button className="partner-btn">Become a Partner</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default LandingPage