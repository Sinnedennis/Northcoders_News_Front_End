import React from 'react';
import PT from 'prop-types';

import { addDefaultAvatar } from '../utils';

import '../styling/UserPage.css';

export default function UserPageUI({ user }) {
  const { avatar_url, name, username } = user;

  return (
    <div className="UserPage">
      <h3 className="title">{username}</h3>
      <h2 className="subtitle">{name}</h2>
      <div className="UserImgContainer">
        <img src={avatar_url} onError={addDefaultAvatar} alt="User Avatar" />
      </div>
    </div>
  );
}

UserPageUI.propTypes = {
  user: PT.object.isRequired,
};