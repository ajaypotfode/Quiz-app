import React from 'react'
import { useNavigate } from 'react-router-dom'

const AllQuize = () => {
  const navigate = useNavigate(null)
  return (
   <>
    <header className="welcome-section">
          <h2>Welcome, <span>[Student Name]</span></h2>
          <p>See, Here You can get Your Study Material...!</p>
        </header>

        <section id="my-notes" className="notes-section">
          <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>total question</th>
                <th>Marks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Computer Science</td>
                <td>4</td>
                <td>8</td>
                <td>
                  <button className='button' onClick={()=>navigate('/user/question')}>Start</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
   </>
  )
}

export default AllQuize