import { useState, useEffect } from 'react'
import moment from 'moment'
import { motion } from 'framer-motion'

import Cortana from '../Cortana/Cortana'

export default function Taskbar() {
    var [shortTime, setShortTime] = useState()
    var [longTime, setLongTime] = useState(0)
    var [timeMode, setTimeMode] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setShortTime(moment().format("h:mm:ss a"))
            setLongTime(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
        }, 1000)
    }, [])

    return <>
        <div className="taskbar">
            <div className="padded hover">
                <i className="fab fa-windows"></i>
            </div>

            <Cortana />

            <div className="padded hover">
                <i className="fas fa-chalkboard"></i>
            </div>

            <div className="app active hover">
                <span className="iconify" data-icon="logos:chrome" data-inline="false"></span>
            </div>

            <div className="app hover">
                <span className="iconify" data-icon="logos:discord" data-inline="false"></span>
            </div>

            <div className="app hover">
                <span className="iconify" data-icon="vscode-icons:file-type-vscode2" data-inline="false"></span>            </div>


            <div className="padded small hover end">
                <i className="fas fa-chevron-up"></i>
            </div>

            <div className="padded small hover">
                <i className="fas fa-wifi"></i>
            </div>

            <div className="padded small hover">
                <i className="fas fa-volume-mute"></i>
            </div>

            <div className="padded small hover">
                <i className="fas fa-battery-full"></i>
            </div>

            <div className="padded hover" onClick={() => {
                timeMode ? setTimeMode(false) : setTimeMode(true)
            }}>
                <p>{timeMode ? shortTime : longTime}</p>
            </div>

            <div className="desktop-button hover"></div>
        </div>
    </>
}