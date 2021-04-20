import React from 'react'
import PropTypes from 'prop-types'
import style from './friendlist.module.css'

const FriendListItem = ({avatar, name, isOnline}) => 
  <>
    <span className={style.status}  style={{backgroundColor: isOnline ? "green" : "red"}} ></span>
    <img className={style.avatar} src={avatar} alt={`${name} avatar`} width="48" />
    <p className={style.name}>{name}</p>
  </>


FriendListItem.propTypes={
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem