import React, { useState } from 'react';
import UserCard from '../UserCard';

function TicketTable({ ticket }) {
  const { title, priority, description, status, hours, user, created_at } = ticket
  const [displayUser, setDisplayUser] = useState(false)

  function onDisplayUser() {
    setDisplayUser(displayUser => !displayUser)
  }

  return (
    <tbody>
      <tr className='active-row'>
        <td>{title}</td>
        <td>{priority}</td>
        <td className='ticket-description'>{description}</td>
        <td>{status}</td>
        <td>{hours}</td>
        <td onClick={onDisplayUser}>{user?.first_name}</td>
        <td>{created_at}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
      {displayUser ? <tr>
        <td colSpan='7'>
          <UserCard user={user} />
        </td>
      </tr>
        :
        null}

    </tbody>
  )
}

export default TicketTable;
