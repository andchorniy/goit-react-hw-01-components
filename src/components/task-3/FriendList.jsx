import React from 'react'
import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'
import style from './friendlist.module.css'


const FriendList = ({friends}) =>
        <div>
            <ul className={style.friendList}>
            {friends.map(({avatar, name, isOnline, id})=>{
               return <li className={style.item} key={id}>
                <FriendListItem 
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
               </li>
            })}
            </ul>
        </div>


FriendList.propTypes={
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired
}

export default FriendList