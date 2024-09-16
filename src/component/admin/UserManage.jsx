import React from 'react';

const UserManagement = () => {
    return (
        <div className="user-management" id='users'>
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map(user => ( */}
              {/* <tr key={user.id}> */}
              <tr>
                {/* <td>{user.username}</td>
                <td>{user.email}</td> */}
                <td>Ajay Potfode</td>
                <td>ajay@gmail.com</td>
                {/* <td>
                  <select value={user.role} onChange={(e) => handleRoleChange(user.id, e.target.value)}>
                  <select>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td> */}
                <td>user</td>
                <td>
                  {/* <button onClick={() => handleDelete(user.id)}>Delete</button> */}
                  <button className='button'>Delete</button>
                </td>
              </tr>
              <tr>
                {/* <td>{user.username}</td>
                <td>{user.email}</td> */}
                <td>Ajay Potfode</td>
                <td>ajay@gmail.com</td>
                {/* <td>
                  <select value={user.role} onChange={(e) => handleRoleChange(user.id, e.target.value)}>
                  <select>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td> */}
                <td>user</td>
                <td>
                  {/* <button onClick={() => handleDelete(user.id)}>Delete</button> */}
                  <button>Delete</button>
                </td>
              </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    );
}

export default UserManagement;
