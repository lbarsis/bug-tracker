import React, { useState } from 'react';
import EditProjectForm from './EditProjectForm';
import TicketTable from '../tickets/TicketTable';
import AddTicketForm from '../tickets/AddTicketForm';

function ProjectRow({ project, onDeleteProject, onUpdateProject, users }) {
  const { id, name, description, status, created_at } = project
  const [showTickets, setShowTickets] = useState(false)
  const [isEditingProject, setIsEditingProject] = useState(false)
  const [isAddingTicket, setIsAddingTicket] = useState(false)
  const [tickets, setTickets] = useState(project.tickets)

  // question mark after tickets determines if tickets exist then map it
  const displayTickets = tickets?.map(ticket => {
    return <TicketTable key={ticket.id} ticket={ticket} />
  })

  // changes state from true to false
  function onDisplayTickets() {
    setShowTickets(displayTickets => !displayTickets)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:9292/projects/${id}`, {
      method: "DELETE",
    });

    onDeleteProject(id);
  }

  function openEditProjectForm() {
    setIsEditingProject(edit => !edit)
  }

  function openCreateTicketForm() {
    setIsAddingTicket(true)
  }

  function handleAddTicket(newTicket) {
    setTickets([
      ...tickets,
      newTicket
    ])
  }

  return (
    <>
      {
        isEditingProject ?
          <tr style={{ "height": "0px" }}>
            <td>
              <EditProjectForm project={project} onUpdateProject={onUpdateProject} setIsEditingProject={setIsEditingProject} />
            </td>
          </tr>
          :
          null
      }

      <tr key={id}>
        <td>{name}</td>
        <td>{description}</td>
        <td>{status}</td>
        <td onClick={onDisplayTickets}>{tickets ? tickets.length : 0}</td>
        <td>{created_at}</td>
        <td>
          <button onClick={openEditProjectForm}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </td>
        <td><button onClick={openCreateTicketForm}>Create ticket</button></td>
      </tr>

      {
        isAddingTicket ?
          <tr>
            <td colSpan='7'><AddTicketForm setIsAddingTicket={setIsAddingTicket} project={project} onAddTicket={handleAddTicket} users={users}/></td>
          </tr>
          :
          null
      }

      {/* ---- tickets section ---- */}
      <tr>
        {/* determines if ticket table should be displayed based on state */}
        {showTickets ?
          <td colSpan="5">
            <table className='project-table'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Priority</th>
                  <th >Description</th>
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
