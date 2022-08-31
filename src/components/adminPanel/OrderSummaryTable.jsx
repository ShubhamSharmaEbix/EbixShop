import React from 'react'
import OrderSummaryRow from './OrderSummaryRow'

export const OrderSummaryTable = () => {
  return (
    <div className="col-lg-12">
        <div className="card">
            <div className="card-body">
                <div className="active-member">
                    <div className="table-responsive">
                        <table className="table table-xs mb-0">
                            <thead>
                                <tr>
                                    <th>Customers</th>
                                    <th>Product</th>
                                    <th>Country</th>
                                    <th>Status</th>
                                    <th>Payment Method</th>
                                    <th>Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <OrderSummaryRow product='iPhone 12' country='United States' paymentStatus='Paid' lastLogin='10 min'/>
                                <OrderSummaryRow product='Pixel 5' country='India' paymentStatus='Pending' lastLogin='10 sec'/>
                                <OrderSummaryRow product='Samsung' country='Argentina' paymentStatus='Pending' lastLogin='30 min'/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>                        
    </div>

  )
}
