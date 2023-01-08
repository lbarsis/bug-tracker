import React, { useState, useEffect } from 'react';
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
      <ProjectRow project={project} key={project.id} />
    )
  })

  // const tickets = projects.map(project => {
  //   return <Tickets key={project.id} ticket={project.tickets} />
  // })

  return (
    <table>
      <thead>
        <tr><th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Open Tickets</th>
          <th>Created At</th></tr>
      </thead>
      <tbody>
        {projectRow}
      </tbody>
    </table>


    // // apply the table props
    // <table {...getTableProps()}>

    //   {/* ------------- HEADER ---------- */}

    //   <thead>
    //     {// Loop over the header rows
    //       headerGroups.map(headerGroup => (
    //         // Apply the header row props
    //         <tr {...headerGroup.getHeaderGroupProps()}>
    //           {// Loop over the headers in each row
    //             headerGroup.headers.map(column => (
    //               // Apply the header cell props
    //               <th {...column.getHeaderProps()}>
    //                 {// Render the header
    //                   column.render('Header')}
    //               </th>
    //             ))}
    //         </tr>
    //       ))}
    //   </thead>

    //   {/* -------------- BODY ------------- */}

    //   {/* Apply the table body props */}
    //   <tbody {...getTableBodyProps()}>
    //     {// Loop over the table rows
    //       rows.map(row => {
    //         // Prepare the row for display
    //         prepareRow(row)
    //         return (

    //           // Apply the row props
    //           <>
    //             <tr {...row.getRowProps()}>
    //               {// Loop over the rows cells
    //                 row.cells.map(cell => {
    //                   // Apply the cell props
    //                   return (
    //                     <td {...cell.getCellProps()}>
    //                       {// Render the cell contents
    //                         cell.render('Cell')}
    //                     </td>
    //                   )
    //                 })}
    //             </tr>

    //           </>
    //         )
    //       })}
    //   </tbody>
    // </table>
  )
}

export default Projects;
