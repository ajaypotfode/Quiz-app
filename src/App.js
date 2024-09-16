
import './component/admin/Admin.css'
import './style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home'
// import Notes from './component/users/Notes';
import Admin from './component/admin/Admin';
import User from './component/users/User';
import Login from './component/pages/Login';
import AllQuize from './component/users/quize/AllQuize';
import Question from './component/users/quize/Question';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/user' element={<User/>}>
            <Route path='allQuize' element={<AllQuize />} />
            <Route path='question' element={<Question />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
