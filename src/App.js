
import './App.css';
import Signup from './signup/Signup';
import Profile from './profile/Profile';
import Option from './option/Option';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  const [userData, setUserdata] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    city: "",
  })

  return (
    <>
      {/* <Signup userData={userData} setUserdata={setUserdata}/> */}
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Signup userData={userData} setUserdata={setUserdata} />} />
          <Route exact path='/profile' element={<Profile userData={userData} setUserdata={setUserdata} />} />
          <Route exact path='/option' element={<Option />} />
        </Routes>
      </BrowserRouter >

    </>



  );
}

export default App;
