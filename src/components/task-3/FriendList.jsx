import React from 'react'
import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'


const FriendList = ({friends}) =>{
    return <div>
            <ul className="friend-list">
            {friends.map(({avatar, name, isOnline, id})=>{
               return <li className="item" key={id}>
                <FriendListItem 
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
               </li>
            })}
            </ul>
        </div>
}

FriendList.propTypes={
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired
}

export default FriendList