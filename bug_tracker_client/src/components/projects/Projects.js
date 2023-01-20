import React from 'react';
import AddProjectForm from './AddProjectForm';
import ProjectRow from './ProjectRow';

function Projects({
  projects, 
  onAddProject, 
  onDeleteProject, 
  onUpdateProject, 
  users,
  onAddTicket,
  onUpdateTicket,
  onDeleteTicket
 }) {

  const projectRow = projects.map(project => {
    return <ProjectRow 
    project={project} 
    key={project.id}
    className='project-row'
    onDeleteProject={onDeleteProject} 
    onUpdateProject={onUpdateProject}
    onAddTicket={onAddTicket}
    onUpdateTicket={onUpdateTicket} 
    onDeleteTicket={onDeleteTicket}
    users={users}/>
  })

  function openAddProjectForm() {
    document.getElementById("newProjectForm").style.display = "block";
  }

  return (
    <div>
      <AddProjectForm onAddProject={onAddProject} />
      <table className='project-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Open Tickets</th>
            <th>Created At</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projectRow}
        </tbody>
      </table>
      <button className="open-button" onClick={openAddProjectForm}>New Project</button>
    </div>
  )
}

export default Projects;
