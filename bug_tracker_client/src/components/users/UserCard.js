import React from 'react';

function UserCard({ user }) {
  const { first_name, last_name, phone, email, profile_image } = user

  return (
    <div className="card">
      <div className="user-header">
        <h4><b>{`${first_name} ${last_name}`}</b></h4>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <div className="profile-picture">
        <div>
          <img src={profile_image} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
