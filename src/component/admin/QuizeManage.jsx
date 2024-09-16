import React from 'react';

const QuizeManage = () => {
    return (
        <div className="note-management" id='quize'>
        <h2>All Quize Details</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Author</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {notes.map(note => ( */}
              {/* <tr key={note.id}> */}
              <tr>
                {/* <td>{note.title}</td>
                <td>{note.content}</td>
                <td>{note.author}</td>
                <td>{note.approved ? 'Approved' : 'Pending'}</td> */}
                <td>Java Notes</td>
                <td>Notes For Oops</td>
                <td>Ajay</td>
                <td>Pending</td>
                <td>
                  {/* {!note.approved && <button onClick={() => handleApprove(note.id)}>Approve</button>}
                  <button onClick={() => handleDelete(note.id)}>Delete</button> */}
                  <button className='button'>Delete</button>
                </td>
              </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    );
}

export default QuizeManage;