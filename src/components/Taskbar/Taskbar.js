import { useState, useEffect } from 'react'
import moment from 'moment'
import { motion } from 'framer-motion'

import Cortana from '../Cortana/Cortana'

export default function Taskbar() {
    var [time, setTime] = useState()

    useEffect(() => {
        setInterval(() => {
            setTime(moment().format("h:mm:ss a"))
        }, 1000)
    }, [])

    return <>
        <div className="taskbar">
            <div className="padded hover">
                <i className="fab fa-windows"></i>
            </div>

            <Cortana />

            <div className="app hover">
                <span className="iconify" data-icon="logos:chrome" data-inline="false"></span>
            </div>

            <div className="app hover">
                <span className="iconify" data-icon="logos:discord" data-inline="false"></span>
            </div>

            <div className="app hover">
                <span class="iconify" data-icon="vscode-icons:file-type-vscode2" data-inline="false"></span>            </div>

            {/* <div className="padded end">&nbsp;</div> */}

            <div className="padded hover end">
                <p>{time}</p>
            </div>

            <div className="desktop-button hover"></div>
        </div>
    </>
}