import React from 'react'

const NewMessage = () => {
  return (
    <li className="notification-unread">
        <a >
            <img className="float-left mr-3 avatar-img" src="images/avatar/1.jpg" alt=""/>
            <div className="notification-content">
                <div className="notification-heading">Saiful Islam</div>
                <div className="notification-timestamp">08 Hours ago</div>
                <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
            </div>
        </a>
    </li>
  )
}

export default NewMessage