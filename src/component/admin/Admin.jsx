import React from 'react'
import UserManagement from './UserManage'
import Statistics from './Statastics'
import { FaChartSimple, FaCircleUser } from 'react-icons/fa6'
import { GrDocumentText, GrFormAdd } from 'react-icons/gr'
import { IoMdExit } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import AddQuize from './addQuiz/AddQuize'
import QuizeManage from './QuizeManage'

const Admin = () => {
  const navigat = useNavigate(null)
  return (
    <>
      <div className="admin-dashboard container-fluid">
        <header className="admin-header">
          <div className="admin-profile">
            <h3>Admin</h3>
          </div>

          <h1>Admin Dashboard</h1>
          <div className='header-btn'>
            <span className='button' onClick={() => { navigat('/') }}>Home</span>
            <span className='button' onClick={() => { navigat('/user/allQuize') }}>Quize</span>
            <span data-bs-toggle="tooltip" data-bs-placement="top" title="Logout" className='logout' >{<IoMdExit />}</span>
          </div>
        </header>
        <nav className="admin-sidebar">
          <ul className="nav-links">
            <li><a data-bs-toggle="tooltip" data-bs-placement="top" title="Chart" href="#stat">{<FaChartSimple />}</a></li>
            <li><a data-bs-toggle="tooltip" data-bs-placement="top" title="Users" href="#users">{<FaCircleUser />}</a></li>
            <li><a data-bs-toggle="tooltip" data-bs-placement="top" title="Quize" href="#quize">{<GrDocumentText />}</a></li>
            <li><a data-bs-toggle="tooltip" data-bs-placement="top" title="Add" href="#addQuize">{<GrFormAdd />}</a></li>
          </ul>
        </nav>
        <div className="section">
          <Statistics />
          <UserManagement />
          <QuizeManage />
          <AddQuize />
        </div>
      </div>

    </>
  )
}

export default Admin