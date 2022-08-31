import React from 'react'
import TodoList from './TodoList'

const OrderSummary = () => {
  return (
    <>
        <div className="col-lg-6 col-md-12">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Order Summary</h4>
                    <div id="morris-bar-chart"></div>
                </div>
            </div>
            
        </div>    
        <div className="col-lg-3 col-md-6">
            <div className="card card-widget">
                <div className="card-body">
                    <h5 className="text-muted">Order Overview </h5>
                    <h2 className="mt-4">5680</h2>
                    <span>Total Revenue</span>
                    <div className="mt-4">
                        <h4>30</h4>
                        <h6>Online Order <span className="pull-right">30%</span></h6>
                        <div className="progress mb-3" style={{"height": "7px"}}>
                            <div className="progress-bar bg-primary" style={{"width": "30%"}} role="progressbar"><span className="sr-only">30% Order</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4>50</h4>
                        <h6 className="m-t-10 text-muted">Offline Order <span className="pull-right">50%</span></h6>
                        <div className="progress mb-3" style={{"height": "7px"}}>
                            <div className="progress-bar bg-success" style={{"width" : "50%"}} role="progressbar"><span className="sr-only">50% Order</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4>20</h4>
                        <h6 className="m-t-10 text-muted">Cash On Develery <span className="pull-right">20%</span></h6>
                        <div className="progress mb-3" style={{"height": "7px"}}>
                            <div className="progress-bar bg-warning" style={{"width": "20%"}} role="progressbar"><span className="sr-only">20% Order</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="col-lg-3 col-md-6">
            <TodoList/>
        </div>
    </>
  )
}

export default OrderSummary;