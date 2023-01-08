import React, { useState, useEffect } from 'react';
import AddProject from './AddProject';
import ProjectRow from './ProjectRow';

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/projects')
      .then(r => r.json())
      .then(projects => setProjects(projects))
  }, []);

  const projectRow = projects.map(project => {
    return (
      <ProjectRow project={project} key={project.id} className='project-row' />
    )
  })

  function openForm() {
    document.getElementById("newProject").style.display = "block";
  }

  return (
    <>
      <button className="open-button" onClick={openForm}>Open Form</button>
      <AddProject />
      <table className='project-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Open Tickets</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {projectRow}
        </tbody>
      </table>
    </>
  )
}

export default Projects;
