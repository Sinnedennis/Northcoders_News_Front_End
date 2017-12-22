import React from 'react';

import { addDefaultAvatar } from './helpers';

export default function UserPageUI({ user }) {

  const {_id, avatar_url, name, username} = user;

  return (
    <div>
      <p>I am a user page.</p>
      <p>id: {_id}</p>
      <img src={avatar_url} onError={addDefaultAvatar} alt="User Avatar" />
      <p>Name: {name}</p>
      <p>Username: {username}</p>
    </div>
  );
}