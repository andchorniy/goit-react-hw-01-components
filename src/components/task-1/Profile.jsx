import React from 'react'
import PropTypes from 'prop-types'
import style from './Profile.module.css'

const Profile = ({avatar, name, tag, location, stats}) => {
    return <div className={style.profile}>
        <div className={style.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={style.avatar}
    />
    <p className={style.name}>{name}</p>
    <p className={style.tag}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>

  <ul className={style.stats}>
    <li className={style.item}>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{stats.followers}</span>
    </li>
    <li className={style.item}>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{stats.views}</span>
    </li>
    <li className={style.item}>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{stats.likes}</span>
    </li>
  </ul>
    </div>
}
Profile.propTypes={
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
}
Profile.defaultProps = {
    avatar:
      'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
  };

export default Profile;