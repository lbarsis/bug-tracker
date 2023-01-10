import React, { useState } from 'react';

function EditProjectForm({ project, setIsEditing, onUpdateProject }) {

  const [formData, setFormData] = useState({
    name: project.name,
    description: project.description,
    status: project.status
  })

  console.log(project.tickets)

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function closeForm() {
    setIsEditing(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`http://localhost:9292/projects/${project.id}`, {
      method: "PATCH",
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
      .then(updatedProject => onUpdateProject(updatedProject))

      setFormData({
        name: '',
        description: '',
        status: ''
      })

      closeForm()
  }

  return (
    <div className='form-popup' id='editProjectForm'>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Edit Project</h1>

        <label><b>Project Name</b></label>
        <input
          type="text"
          placeholder="Project name..."
          name="name"
          required
          onChange={handleChange}
          value={formData.name}
        />

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
          value={formData.description === null ? '' : formData.description}
        />

        <button type="submit" className="btn">Submit</button>
        <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
      </form>
    </div>
  );
}


export default EditProjectForm;
