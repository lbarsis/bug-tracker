import React from 'react';
import ProjectForm from './ProjectForm';
import ProjectRow from './ProjectRow';

function Projects({projects, onAddProject, onDeleteProject }) {

  const projectRow = projects.map(project => {
    return <ProjectRow project={project} key={project.id} className='project-row' onDeleteProject={onDeleteProject} />
  })

  function openForm() {
    document.getElementById("newProject").style.display = "block";
  }

  return (
    <div>
      <ProjectForm onAddProject={onAddProject} />
      <table className='project-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Open Tickets</th>
            <th>Created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projectRow}
        </tbody>
      </table>
      <button className="open-button" onClick={openForm}>New Project</button>
    </div>
  )
}

export default Projects;
