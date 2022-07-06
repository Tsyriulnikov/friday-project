import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";
import {Login} from "../Login/Login";
import {Register} from "../Register/Register";
import {Profile} from "../Profile/Profile";
import Error404 from "../Page-not-found/Error404";
import React from "react";
import {ForgotPass} from "../ForgotPass/ForgotPass";
import {NewPass} from "../NewPass/NewPass";
import {DemoPage} from "../DemoPage/DemoPage";

export const Pages = () => {
    return (
       <div>
        <Routes>
            <Route path={"/"} element={<Navigate to="/home"/>}/>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={'/404'} element={<Error404/>}/>
            <Route path={'*'} element={<Navigate to="/404"/>}/>
            <Route path={"/forgot_pass"} element={<ForgotPass/>}/>
            <Route path={"/new_pass"} element={<NewPass/>}/>
            <Route path={"/demo_page"} element={<DemoPage/>}/>
        </Routes>
       </div>
    )
}