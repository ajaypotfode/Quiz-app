import React, { useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './user.css'
import { IoMdExit } from 'react-icons/io';
import Question from './quize/Question';
import AllQuize from './quize/AllQuize';

function User() {
  const navigat = useNavigate(null)
  const [noteDetail, setNoteDetail] = useState(false)
  const mainCont = useRef()
  // const { id } = useParams();
  // const note = { id, title: `Note ${id}`, content: `This is the content of note ${id}.` };
  const hanndleDetails = () => {
    mainCont.current.classList.toggle("active-blur")
    setNoteDetail(!noteDetail)
  }

  return (
    <>
      <div className="user-page" ref={mainCont}>
        <nav className="user-navbar">
          <div className="navbar-logo">
            <h1>Quize</h1>
          </div>
          <span className="std-navbar-links">
            <span className='button' onClick={() => { navigat('/') }}>Home</span>
            {/* <span className='button'>Add Notes</span> */}
            <span data-bs-toggle="tooltip" data-bs-placement="top" title="LogOut"
              className='logOut-btn'
            >
              {<IoMdExit />}
            </span>
          </span>
        </nav>
        {/* <AllQuize/> */}
        <Outlet/>
      </div>
    </>
  );
}
export default User;