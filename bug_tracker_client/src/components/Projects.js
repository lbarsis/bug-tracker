import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/projects')
    .then(r => r.json())
    .then(projects => setProjects(projects))
  }, []);

  console.log(projects)

  let displayProjects = projects.map(project => project.name)

  return (
    <div>
      {displayProjects}
    </div>
  );
}

export default Projects;
