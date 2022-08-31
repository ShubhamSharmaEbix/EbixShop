import React from 'react'

const Cards = (props) => {
  return (
        <div className="col-lg-3 col-sm-6">
            <div className={`card ${props.bg}`}>
                <div className="card-body">
                    <h3 className="card-title text-white">{props.title}</h3>
                    <div className="d-inline-block">
                        <h2 className="text-white">{props.title!=='Net Profit'?(props.title!=='Customer Satisfaction'?props.amount:`${props.amount}%`):`$ ${props.amount}`}</h2>
                        <p className="text-white mb-0">Jan - March 2019</p>
                    </div>
                    <span className="float-right display-5 opacity-5"><i className={props.icon}></i></span>
                </div>
            </div>
        </div>
  )
}

export default Cards