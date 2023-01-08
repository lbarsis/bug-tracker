import React from 'react';

function TicketTable({ ticket }) {
  const { title, priority, description, status, hours, user, created_at } = ticket

  return (
      <tbody className='ticket-row'>
        <tr >
          <td>{title}</td>
          <td>{priority}</td>
          <td className='ticket-description'>{description}</td>
          <td>{status}</td>
          <td>{hours}</td>
          <td>{user.first_name}</td>
          <td>{created_at}</td>
        </tr>
      </tbody>
  )
}

export default TicketTable;
