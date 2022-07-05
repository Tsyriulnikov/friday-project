import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Error404 from "./components/Page-not-found/Error404";
import {Login} from "./components/Login/Login";
import {Register} from "./components/Register/Register";
import {Home} from "./components/Home/Home";
import {Menu} from "./components/Menu/Menu";
import {Profile} from "./components/Profile/Profile";

export const App=()=> {
  return (
    <div className="App">
      <Menu/>
        <Routes>
        <Route path={"/"} element={<Navigate to="home"/>}/>
        <Route path={"home"} element={<Home />}/>
        <Route path={"login"} element={<Login/>}/>
        <Route path={"register"} element={<Register/>}/>
        <Route path={"profile"} element={<Profile/>}/>
        <Route path={'/404'} element={<Error404/>}/>
        <Route path={'*'} element={<Navigate to="/404"/>}/>
      </Routes>
    </div>
  );
}


