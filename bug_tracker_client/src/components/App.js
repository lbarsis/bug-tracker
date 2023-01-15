import '../App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import Projects from './projects/Projects';
import UserTable from './users/UserTable';

function App() {
  const [projects, setProjects] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/projects')
      .then(r => r.json())
      .then(projects => setProjects(projects))

    fetch('http://localhost:9292/users')
      .then(r => r.json())
      .then(users => setUsers(users))
  }, []);

  function handleAddProject(newProject) {
    newProject.tickets=[]
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

  function handleAddUser(newUser) {
    newUser.tickets=[]
    setUsers([
      ...users,
      newUser
    ])
  }

  function handleDeleteUser(id) {
    const displayUsers = users.filter(user => user.id !== id)
    setUsers(displayUsers)
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects'
          element={<Projects
            projects={projects}
            users={users}
            setProjects={setProjects}
            onAddProject={handleAddProject}
            onDeleteProject={handleDeleteProject}
            onUpdateProject={handleUpdateProject}
          />} />
          <Route path='/users' element={<UserTable users={users} onAddUser={handleAddUser} onDeleteUser={handleDeleteUser} />}/>
      </Routes>
    </div>
  );
}

export default App;
