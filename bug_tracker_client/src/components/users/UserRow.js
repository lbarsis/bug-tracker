import React from 'react';

function UserRow({user, setDisplayUser, displayUser }) {

  function handleDisplayUser() {
    displayUser === null ? setDisplayUser(user) : setDisplayUser(null)
  }


  return (
    <tr key={user.id} onClick={handleDisplayUser}>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
      </tr>
  );
}

export default UserRow;
