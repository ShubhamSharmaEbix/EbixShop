import React from 'react'
import SalesActivityCard from './SalesActivityCard'

const SalesSection = () => {
  return (
    <>
        <div className="col-lg-6 col-sm-6">
            <div className="card">
                <div className="chart-wrapper mb-4">
                    <div className="px-4 pt-4 d-flex justify-content-between">
                        <div>
                            <h4>Sales Activities</h4>
                            <p>Last 6 Month</p>
                        </div>
                        <div>
                            <span><i className="fa fa-caret-up text-success"></i></span>
                            <h4 className="d-inline-block text-success">720</h4>
                            <p className=" text-danger">+120.5(5.0%)</p>
                        </div>
                    </div>
                    <div>
                            <canvas id="chart_widget_3"></canvas>
                    </div>
                </div>
                <div className="card-body border-top pt-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className='p-0'>
                                <li>5% Negative Feedback</li>
                                <li>95% Positive Feedback</li>
                            </ul>
                            <div>
                                <h5>Customer Feedback</h5>
                                <h3>385749</h3>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div id="chart_widget_3_1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-sm-6">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Activity</h4>
                    <div id="activity">
                        <SalesActivityCard/>
                        <SalesActivityCard/>
                        <SalesActivityCard/>
                        <SalesActivityCard/>
                        <SalesActivityCard/>
                        <SalesActivityCard/>
                        <SalesActivityCard/>
                        <SalesActivityCard/>
                        <SalesActivityCard/>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default SalesSection