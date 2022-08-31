import React from 'react';
import Cards from '../components/adminPanel/Cards';
// import Chart1 from '../components/adminPanel/Chart1';
import OrderSummary from '../components/adminPanel/OrderSummary';
import Navbar from '../components/adminPanel/Navbar';
import { OrderSummaryTable } from '../components/adminPanel/OrderSummaryTable';
import SalesSection from '../components/adminPanel/SalesSection';
import SocialMediaCard from '../components/adminPanel/SocialMediaCard';


const AdminPanel = () => {
  return (
    <>
    {/* Loader */}
        <div id="preloader">
            <div className="loader">
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10" />
                </svg>
            </div>
        </div>

        {/* Content */}
        <div id='main-wrapper'>
            <Navbar/>
            <div className="content-body">
                <div className="container-fluid mt-3">
                    <div className="row">
                        <Cards bg='gradient-1' icon='fa fa-shopping-cart' title='Products Sold' amount='4565'/>
                        <Cards bg='gradient-2' icon='fa fa-money' title='Net Profit' amount='8541'/>
                        <Cards bg='gradient-3' icon='fa fa-users' title='New Customers' amount='4565'/>
                        <Cards bg='gradient-4' icon='fa fa-heart' title='Customer Satisfaction' amount='99'/>
                    </div>
                    <div className='row'>
                        {/*<Chart1/>*/}
                    </div>
                    <div className='row'>
                        <OrderSummary/>
                    </div>
                    <div className='row'>
                        <OrderSummaryTable/>
                    </div>
                    <div className='row'>
                        <SalesSection/>
                    </div>
                    <div className='row'>
                        <SocialMediaCard socialMediaIcon="fa fa-facebook" followers='119k'/>
                        <SocialMediaCard socialMediaIcon="fa fa-linkedin" followers='119k'/>
                        <SocialMediaCard socialMediaIcon="fa fa-google-plus" followers='119k'/>
                        <SocialMediaCard socialMediaIcon="fa fa-twitter" followers='119k'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminPanel