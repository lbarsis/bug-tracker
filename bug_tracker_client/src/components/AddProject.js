import React, { useState } from 'react';

function AddProject() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'New'
  })

  function closeForm() {
    document.getElementById("newProject").style.display = "none";
  }

  function onUpdateForm(e) {
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
      }),
    })
      .then((r) => r.json())
      .then(newProject => console.log(newProject));
  }


  return (
    <div className='form-popup' id='newProject'>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>New Project</h1>

        <label><b>Project Name</b></label>
        <input
          type="text"
          placeholder="Project name..."
          name="name"
          required
          onChange={onUpdateForm}
          value={formData.name}
        />

        <label><b>Status</b></label>
        <select id="status" name="status" onChange={onUpdateForm}>
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
          onChange={onUpdateForm}
          value={formData.description}
        />

        <button type="submit" className="btn">Submit</button>
        <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
      </form>
    </div>
  );
}

export default AddProject;
