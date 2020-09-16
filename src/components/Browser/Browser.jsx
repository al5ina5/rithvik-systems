import { AnimatePresence, motion } from 'framer-motion'
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';
import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import styles from './Browser.module.scss'

export default function Browser() {
    var router = useRouter()
    const constraintsRef = useRef(null)

    var [hideWindow, setHideWindow] = useState(false)

    return <>
        <AnimatePresence>
            {!hideWindow && <>
                <div className={styles.Browser} ref={constraintsRef}>
                    <motion.div
                        animate={{ opacity: [0, 1] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        drag={true}
                        dragConstraints={constraintsRef}
                        dragElastic={1}
                        className={styles.window}>
                        <div className={styles.topBar}>
                            <div className={styles.title}>RITHVIK on Twitch</div>
                            <div className={styles.buttons}>
                                {/* <i className="fas fa-circle" style={{ color: '#00b200' }}></i> */}
                                {/* <i className="fas fa-circle" style={{ color: '#d2d200' }}></i> */}
                                <i onClick={() => { setHideWindow(true) }} className="fas fa-circle" style={{ color: '#ff3033' }}></i>
                            </div>
                        </div>
                        <div className={styles.area}>
                            <TwitchEmbed
                                width="100%"
                                height="100%"
                                channel="rithvikkk"
                                id="rithvikkk"
                                theme="dark"
                                onVideoPause={() => console.log(':(')}
                            />
                        </div>
                    </motion.div>
                </div>
            </>}
        </AnimatePresence>
    </>
}