import React from 'react';
import { FriendListItem } from './FriendListItem';
import PropTypes from "prop-types";


const FriendList = ({friends} )=> {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};

FriendList.prototype = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool
      })
    ).isRequired,
  };

export default FriendList;
