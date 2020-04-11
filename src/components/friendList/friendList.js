import React from 'react';
import FriendListItem from './friendListItem';
import styles from './friendListItem.module.css';

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
export default FriendList;
