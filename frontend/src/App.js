import React from 'react'
import {
  Route,
  Routes,
  Switch
} from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import ManageUsers from './pages/manageUsers/ManageUsers';

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<LandingPage />}/>

        <Route path="/manageUsers" element={<ManageUsers />}/>
      </Routes>
    </div>
  )
}

export default App