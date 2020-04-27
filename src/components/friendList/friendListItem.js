import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

const FriendListItem = ({ friend }) => {
  const statusClass = friend.isOnline ? styles.active : styles.disabled;
  return (
    <li className={styles.item}>
      <span className={statusClass}>{friend.isOnline}</span>
      <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default FriendListItem;
