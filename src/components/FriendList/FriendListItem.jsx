import React from "react";
import css from "./FriendListItem.module.css"
import PropTypes from "prop-types";

export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
        
      <li className={css.item}>
      <span className={isOnline ? css.status__true : css.status__false}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="60" />
      <p className={css.name}>{name}</p>
    </li>
      
    )
};


FriendListItem.prototype = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

