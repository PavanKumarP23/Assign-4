import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

function UserList() {
  const { users, deleteUser } = useContext(UserContext);

  return (
    <div>
      <h1>User List</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.email}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <Link to={`/edit-user/${user.id}`} style={{ marginRight: '10px', color: 'blue', textDecoration: 'underline' }}>
                  Edit
                </Link>
                <button style={{ color: 'red', border: 'none', background: 'none' }} onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
