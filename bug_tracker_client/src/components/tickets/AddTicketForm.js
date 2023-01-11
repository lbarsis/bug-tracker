import React, { useState } from 'react';

function AddTicketForm({ setIsAddingTicket }) {
  const [formData, setFormData] = useState({
    title: "",
    priority: "",
    description: "",
    status: "",
    hours: 1
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

    fetch("http://localhost:9292/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        status: formData.status
      })
    })
      .then(r => r.json())
      .then(newProject => console.log(newProject))

    setFormData({
      name: '',
      description: '',
      status: 'New'
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

          <label><b>Description</b></label>
          <input
            type="text"
            placeholder="Project name..."
            name="hours"
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
