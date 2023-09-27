import React from 'react'
import {
  Route,
  Routes
} from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import ManageUsers from './pages/manageUsers/ManageUsers';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<ManageUsers />}/>

        <Route path="/manageUsers" element={<ManageUsers />}/>
      </Routes>
    </div>
  )
}

export default App