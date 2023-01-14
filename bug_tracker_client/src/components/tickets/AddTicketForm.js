import React, { useState } from 'react';

function AddTicketForm({ setIsAddingTicket, project, onAddTicket, users }) {

  const [formData, setFormData] = useState({
    title: "",
    priority: "Low",
    description: "",
    status: "New",
    user: '',
    hours: 1
  })

  const userOptions = users.map(user => {
    return <option key={user.id} name={user.id} value={user.id}>{`${user.first_name} ${user.last_name}`}</option>
  })

  function closeForm() {
    setIsAddingTicket(false)
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        priority: formData.priority,
        description: formData.description,
        status: formData.status,
        hours: formData.hours,
        project_id: project.id,
        user_id: formData.user
      })
    })
      .then(r => r.json())
      .then(newTicket => {
        fetch(`http://localhost:9292/users/${newTicket.user_id}`).then(r => r.json()).then(user => newTicket.user = user)
        onAddTicket(newTicket)}
        )

    setFormData({
      title: "",
      priority: "Low",
      description: "",
      status: "New",
      user: '',
      hours: 1
    })

    closeForm()
  }
  return (
    <div className='form-popup' id='createTicketForm'>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Create Ticket</h1>

        <div className='ticket-form-grid-container'>
          <div className='ticket-input-grid-item'>
            <label><b>Ticket Title</b></label>
            <input
              type="text"
              placeholder="Ticket Title..."
              name="title"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div className='ticket-input-grid-item'>
            <label><b>Priority</b></label>
            <select id="priority" name="priority" onChange={handleChange}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>


          <label><b>Status</b></label>
          <select id="status" name="status" onChange={handleChange}>
            <option value="new">New</option>
            <option value="complete">Complete</option>
            <option value="in-progress">In-progress</option>
            <option value="canceled">Canceled</option>
          </select>

          <label><b>User</b></label>
          <select id="user" name="user" onChange={handleChange} required>
            <option></option>
            {userOptions}
          </select>

          <label><b>Estimated Hours</b></label>
          <input
            type="text"
            placeholder='1'
            name="hours"
            required
            onChange={handleChange}
            value={formData.hours}
          />

          <label><b>Description</b></label>
          <input
            type="text"
            placeholder="Project name..."
            className='new-project-description'
            name="description"
            style={{ height: "200px" }}
            required
            onChange={handleChange}
            value={formData.description}
          />

        </div>
        <button type="submit" className="btn">Submit</button>
        <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
      </form>
    </div>
  );
}

export default AddTicketForm;
