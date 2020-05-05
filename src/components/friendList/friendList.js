import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem friend={friend} key={friend.id} />
    ))}
  </ul>
);
FriendList.defaultProps = {
  friends: [],
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default FriendList;
