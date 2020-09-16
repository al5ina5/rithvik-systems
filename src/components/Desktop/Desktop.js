import { useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'

import DesktopIcon from '../DesktopIcon/DesktopIcon'

import styles from './Desktop.module.scss'

export default function Desktop() {
    const backgroundRef = useRef(null)
    useEffect(() => {
        DOTS({
            el: backgroundRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x696969,
            color2: 0x313131,
            backgroundColor: 0xf0f0f
        })
    }, [])
    return <>
        <div className={styles.desktop} ref={backgroundRef}>
            <div className={styles.center}>
                <DesktopIcon name="TempleOSRS" icon="noto:crossed-swords" href="https://templeosrs.com/player/overview.php?player=rithvik" onDoubleClick={() => {
                    alert('Open Twitch?')
                }} />
                <DesktopIcon name="Twitch" icon="logos:twitch" href="https://www.twitch.tv/rithvikkk" onDoubleClick={() => {
                    alert('Open Twitch?')
                    // https://www.twitch.tv/rithvikkk
                }} />
                <DesktopIcon name="Instagram" icon="entypo-social:instagram" href="https://www.instagram.com/rithvik/" onDoubleClick={() => {
                    alert('Open Instagram?')
                    // https://www.instagram.com/rithvik/
                }} />
                <DesktopIcon name="Email Me" icon="flat-ui:mail" href="mailto:admin@rithvik.com" onDoubleClick={() => {
                    alert('Mail me?')
                    // mailto:admin@rithvik.com
                }} />
                <DesktopIcon name="Grailed" icon="emojione:letter-g" href="https://www.grailed.com/rithvik" onDoubleClick={() => {
                    alert('Open Grailed?')
                }} />
            </div>
        </div>
    </>
}