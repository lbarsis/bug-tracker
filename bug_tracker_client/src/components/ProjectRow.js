import React from 'react';
import TicketTable from './TicketTable';

function ProjectRow({ project }) {
  const { id, name, description, status, created_at, tickets } = project

  const displayTickets = tickets.map(ticket => {
    return <TicketTable key={ticket.id} ticket={ticket} />
  })

  return (
    <>
      <tr key={id} className='project-row'>
        <td>{name}</td>
        <td>{description}</td>
        <td>{status}</td>
        <td>{tickets.length}</td>
        <td>{created_at}</td>
      </tr>
      <tr>
        <td colSpan="5">
          <table className='ticket-table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Priority</th>
              <th>Description</th>
              <th>Status</th>
              <th>Hours</th>
              <th>User</th>
              <th>Created At</th>
            </tr>
          </thead>
          {displayTickets}
          </table>
        </td>
      </tr>
    </>
  )
}

export default ProjectRow;
