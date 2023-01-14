import React, {useState} from 'react';
import UserCard from './UserCard';
import UserRow from './UserRow';

function UserTable({ users }) {
  const [displayUser, setDisplayUser] = useState(null)

  const displayUsers = users.map(user => {
    return <UserRow key={user.id} user={user} setDisplayUser={setDisplayUser} />
  })

  return (
    <div>
      <table className='project-table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers}
        </tbody>
      </table>
      {
        displayUser ?
        <UserCard user={displayUser} />
        :
        null
      }
    </div>

  );
}

export default UserTable;
