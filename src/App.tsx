import React from 'react';
import './App.css';
import {BrowserRouter, Link, NavLink, Route, Routes, Navigate} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import DashBoard from "./components/DashBoard";

function App() {

    const getActiveStyle = ( {isActive}: { isActive: boolean } ) => ({
        color: isActive ? "black" : "azure"
    });

    return (
        <BrowserRouter>
            <nav>
                <NavLink to={"/home"} style={getActiveStyle}>Home</NavLink>
                <NavLink to={"/about"} style={getActiveStyle}>About</NavLink>
                <NavLink to={"/dashboard"} style={getActiveStyle}>Dashboard</NavLink>
            </nav>
            <main>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/home"}/>}/>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/dashboard"} element={<DashBoard/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
