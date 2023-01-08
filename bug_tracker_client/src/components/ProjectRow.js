import React, { useState } from 'react';
import TicketTable from './TicketTable';

function ProjectRow({ project }) {
  const { id, name, description, status, created_at, tickets } = project
  const [showTickets, setShowTickets] = useState(false)

  const displayTickets = tickets.map(ticket => {
    return <TicketTable key={ticket.id} ticket={ticket} />
  })

  // changes state from true to false
  function onDisplayTickets() {
    setShowTickets(displayTickets => !displayTickets)
  }

  return (
    <>
      <tr key={id} className='project-row'>
        <td>{name}</td>
        <td>{description}</td>
        <td>{status}</td>
        <td onClick={onDisplayTickets}>{tickets.length}</td>
        <td>{created_at}</td>
      </tr>
      {/* ---- tickets section ---- */}
      <tr>
        {/* determines if ticket table should be displayed based on state */}
        {showTickets ?
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
          :
          null
        }
      </tr>
    </>
  )
}

export default ProjectRow;
