import React from 'react'

const SalesActivityCard = () => {
  return (
    <div className="media border-bottom-1 pt-3 pb-3">
        <img width="35" src="../../src/assests/images/avatar/1.jpg" className="mr-3 rounded-circle"/>
        <div className="media-body">
            <h5>Received New Order</h5>
            <p className="mb-0">I shared this on my fb wall a few months back,</p>
        </div><span className="text-muted ">April 24, 2018</span>
    </div>
  )
}

export default SalesActivityCard