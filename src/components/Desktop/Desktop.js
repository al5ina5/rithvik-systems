import { useEffect, useRef } from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min'

import DesktopIcon from '../DesktopIcon/DesktopIcon'

import styles from './Desktop.module.scss'

export default function Desktop() {

    const backgroundRef = useRef(null)
    useEffect(() => {
        GLOBE({
            el: backgroundRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            size: 2.0,
            color: 0x222222,
            backgroundColor: 0xf0f0f
        })
    }, [])
    return <>
        <div className={styles.desktop} ref={backgroundRef}>
            <div className={styles.center}>
                <DesktopIcon name="@twitchboi" icon="logos:twitch" onDoubleClick={() => {
                    alert('Open Twitch?')
                }} />
                <DesktopIcon name="@instaboi" icon="logos:chrome" onDoubleClick={() => {
                    alert('Open Instagram?')
                }} />
                <DesktopIcon name="Apple" icon="logos:apple" onDoubleClick={() => {
                    alert('Open Apple?')
                }} />
            </div>
        </div>
    </>
}