import '../App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import Projects from './projects/Projects';

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/projects')
      .then(r => r.json())
      .then(projects => setProjects(projects))
  }, []);

  function handleAddProject(newProject) {
    setProjects([...projects, newProject])
  }

  function handleUpdateProject(updatedProject) {
    const displayProjects = projects.map(project => {
      if (project.id === updatedProject.id) {
        return {
          ...updatedProject,
          tickets: project.tickets
        }
      } else {
        return project
      }
    })
    
    setProjects(displayProjects)
  }

  function handleDeleteProject(id) {
    const displayProjects = projects.filter((project) => project.id !== id);
    setProjects(displayProjects);
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' 
        element={<Projects 
        projects={projects} 
        setProjects={setProjects} 
        onAddProject={handleAddProject} 
        onDeleteProject={handleDeleteProject}
        onUpdateProject={handleUpdateProject}
        />} />
      </Routes>
    </div>
  );
}

export default App;
