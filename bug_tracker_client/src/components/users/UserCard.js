import React from 'react';

function UserCard({ user }) {
  const { first_name, last_name, phone, email, profile_image, get_completed_tickets, get_in_progress_tickets } = user

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
      <div className="ticket-data">
        <div>
          <h4><b>Completed Tickets:</b></h4>
          <h2> {get_completed_tickets}</h2>
        </div>
        <div>
          <h4><b>Current Tickets:</b></h4>
          <h2>{get_in_progress_tickets}</h2>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
