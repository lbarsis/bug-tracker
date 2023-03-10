import React, { useState } from 'react';
import AddUserForm from './AddUserForm';
import UserCard from './UserCard';
import UserRow from './UserRow';

function UserTable({ users, onAddUser }) {
  const [displayUser, setDisplayUser] = useState(null)
  const [displayAddUserForm, setDisplayAddUserForm] = useState(false)

  const displayUsers = users.map(user => {
    return <UserRow key={user.id} user={user} setDisplayUser={setDisplayUser} displayUser={displayUser} />
  })

  function handleDisplayAddUserForm() {
    setDisplayAddUserForm(true)
  }

  return (
    <div>
      {
        displayAddUserForm ? <AddUserForm setDisplayAddUserForm={setDisplayAddUserForm} onAddUser={onAddUser} setDisplayUser={setDisplayUser} />
          :
          <button className="open-button" onClick={handleDisplayAddUserForm}>Add User</button>
      }
      <table className='project-table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayUsers}
        </tbody>
      </table>
      {
        displayUser === null ?
          null
          :
          <UserCard user={displayUser} />
      }
    </div>

  );
}

export default UserTable;
