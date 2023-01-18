import React from 'react';

function UserRow({user, setDisplayUser, onDeleteUser}) {

  function handleDisplayUser() {
    setDisplayUser(user)
  }

  function deleteUser() {
    fetch(`http://localhost:9292/users/${user.id}`,{
      method: 'DELETE'
    })
    onDeleteUser(user.id)
  }

  return (
    <tr key={user.id} onClick={handleDisplayUser}>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td><button onClick={deleteUser} id='delete'>Delete</button></td>
      </tr>
  );
}

export default UserRow;
