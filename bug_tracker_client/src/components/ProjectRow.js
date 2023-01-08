import React from 'react';

function ProjectRow({project}) {
  const {id, name, description, status, created_at, tickets} = project
  return (
    <>
      <>
        <tr key={id}>
          <td>{name}</td>
          <td>{description}</td>
          <td>{status}</td>
          <td>{tickets.length}</td>
          <td>{created_at}</td>
        </tr>
        <tr>
          <td colSpan="5">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Title</th>
                  <th>Title</th>
                  <th>Title</th>
                  <th>Title</th>
                  <th>Title</th>
                  <th>Title</th>
                  <th>Title</th>
                </tr>
              </thead>
            </table>
          </td>
        </tr>
      </>
    </>
  )
}

export default ProjectRow;
