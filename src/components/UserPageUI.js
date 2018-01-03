import React from 'react';
import PT from 'prop-types';

import { addDefaultAvatar } from '../utils';

export default function UserPageUI({ user }) {
  const { avatar_url, name, username } = user;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <img src={avatar_url} onError={addDefaultAvatar} alt="User Avatar" />
    </div>
  );
}

UserPageUI.propTypes = {
  user: PT.object.isRequired,
};