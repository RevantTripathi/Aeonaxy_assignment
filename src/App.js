
import './App.css';
import Signup from './signup/Signup';
import Profile from './profile/Profile';
import Option from './option/Option';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Email from './email/Email';

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

      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Signup userData={userData} setUserdata={setUserdata} />} />
          <Route exact path='/profile' element={<Profile userData={userData} setUserdata={setUserdata} />} />
          <Route exact path='/option' element={<Option />} />
          <Route exact path='/email' element={<Email userData={userData}  />} />
        </Routes>
      </BrowserRouter >

      {/* <Email/> */}

    </>



  );
}

export default App;
