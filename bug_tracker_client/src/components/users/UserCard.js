import React from 'react';

function UserCard({ user }) {
  const { first_name, last_name, phone, email, profile_image, tickets } = user

  const displayCompletedTicketCount = tickets.filter(ticket => ticket.status === 'complete').length

  return (
    // <div className="card">
    //   <img src={profile_image} alt="Avatar" />
    //     <div className="container">
    //       <h4><b>{`${first_name} ${last_name}`}</b></h4>
    //       <p>{phone}</p>
    //       <p>{email}</p>
    //     </div>
    // </div>
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
          <h4><b>Completed Tickets:</b> {displayCompletedTicketCount}</h4>
        </div>
        <div>
          <h4><b>Completed Tickets:</b> {displayCompletedTicketCount}</h4>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
