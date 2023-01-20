import '../App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar';
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

  function handleUpdateTicket(projectId, ticketId, updatedTicket) {
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          tickets: project.tickets.map(ticket => {
            if (ticket.id === ticketId) {
              return {
                ...updatedTicket,
                ticket
              }
            }
            return ticket
          })
        }
      }
      return project
    })

    setProjects(updatedProjects);
  }

  function handleAddTicket(projectId, newTicket) {
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          tickets: [...project.tickets, newTicket]
        }
      }
      return project
    })

    setProjects(updatedProjects)
  }

  function handleDeleteTicket(projectId, ticketId) {
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          tickets: project.tickets.filter(ticket => ticket.id !== ticketId)
        }
      }
      return project
    })

    setProjects(updatedProjects);
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

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home projects={projects}/>} /> */}
        <Route path='/'
          element={<Projects
            projects={projects}
            users={users}
            setProjects={setProjects}
            onAddProject={handleAddProject}
            onDeleteProject={handleDeleteProject}
            onUpdateProject={handleUpdateProject}
            onAddTicket={handleAddTicket}
            onUpdateTicket={handleUpdateTicket}
            onDeleteTicket={handleDeleteTicket}
          />} />
          <Route path='/users' element={<UserTable users={users} onAddUser={handleAddUser} />}/>
      </Routes>
    </div>
  );
}

export default App;
