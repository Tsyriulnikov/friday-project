import React from 'react'
import s from "./Error404.module.css"
import {useNavigate} from "react-router-dom";
import Cat404 from '../../assets/images/404.gif'
function Error404() {
    let navigate = useNavigate()
    return (
        <div className={s.container}>
            <div className={s.oops}>OOPS!</div>
            <div className={s.pnf}>404 - Page not found!</div>
            <div>
                <button className={s.buttonHome} onClick={() => {
                    navigate('/')
                }}>Home
                </button>
            </div>
            <div>
                <img src={Cat404}/>
            </div>
        </div>
    )
}

export default Error404
