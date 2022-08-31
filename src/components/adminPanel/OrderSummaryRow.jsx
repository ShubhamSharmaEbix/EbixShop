import React from 'react'

const OrderSummaryRow = (props) => {
    let paymentStatusClass = 'fa fa-circle-o mr-2 text-success';
    let progressBarClass = 'progress-bar bg-success';

    if(props.paymentStatus==='Pending'){
        paymentStatusClass = 'fa fa-circle-o mr-2 text-warning';
        progressBarClass = 'progress-bar bg-warning';
    }

  return (
    <tr>
        <td><img src="../../src/assests/images/avatar/1.jpg" className=" rounded-circle mr-3" alt=""/>Sarah Smith</td>
        <td>{props.product}</td>
        <td>
            <span>{props.country}</span>
        </td>
        <td>
            <div>
                <div className="progress" style={{"height": "6px"}}>
                    <div className={progressBarClass} style={{"width": "50%"}}></div>
                </div>
            </div>
        </td>
        <td><i className={paymentStatusClass}></i>{props.paymentStatus}</td>
        <td>
            <span>Last Login</span>
            <span className="m-0 pl-3">{props.lastLogin} ago</span>
        </td>
    </tr>
  )
}

export default OrderSummaryRow