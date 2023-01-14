import React, { useState } from 'react';
import UserCard from '../UserCard';
import EditTicketForm from './EditTicketForm';

function TicketTable({ ticket, users, onEditTicket, onDeleteTicket }) {
  const { title, priority, description, status, hours, user, created_at } = ticket
  const [displayUser, setDisplayUser] = useState(false)
  const [isEditingTicket, setIsEditingTicket] = useState(false)

  function onDisplayUser() {
    setDisplayUser(displayUser => !displayUser)
  }

  function openEditTicketForm() {
    setIsEditingTicket(true)
  }

  function deleteTicket() {
    fetch(`http://localhost:9292/tickets/${ticket.id}`, {
      method: 'DELETE'
    })

    onDeleteTicket(ticket.id)
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
          <button onClick={openEditTicketForm}>Edit</button>
          <button onClick={deleteTicket}>Delete</button>
        </td>
      </tr>

      {displayUser ? <tr>
        <td colSpan='7'>
          <UserCard user={user} />
        </td>
      </tr>
        :
        null}

      {isEditingTicket ?
        <tr>
          <td colSpan='7'>
            <EditTicketForm ticket={ticket} setIsEditingTicket={setIsEditingTicket} users={users} onEditTicket={onEditTicket}/>
          </td>
        </tr>
        :
        null}
    </tbody>
  )
}

export default TicketTable;
