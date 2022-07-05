import React from 'react';
import {HashRouter} from 'react-router-dom'
import './App.css';
import {Menu} from "./components/Menu/Menu";
import {Pages} from "./components/Pages/Pages";

export const App = () => {
    return (
        <div className="App">
            <Menu/>
            <Pages/>
        </div>
    );
}


