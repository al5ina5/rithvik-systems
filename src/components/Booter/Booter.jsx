import { useState, useEffect, useRef } from 'react'
import Typist from 'react-typist'
import { motion, AnimatePresence } from 'framer-motion'
import GLOBE from 'vanta/dist/vanta.globe.min'

import styles from './Booter.module.scss'

export default function Booter() {
    var [hideBooter, setHideBooter] = useState(false)
    var [booterReady, setBooterReady] = useState(true)

    const myRef = useRef(null)
    useEffect(() => {
        if (!hideBooter) {
            GLOBE({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x82ff3f,
                size: 2.00,
                backgroundColor: 0xf0f0f
            })
        }
    }, [hideBooter])

    // if (hideBooter) return <></>
    return <>
        <AnimatePresence>

            {!hideBooter && <>
                <motion.div
                    animate={{ opacity: 1 }}
                    exit={{ opacity: [1, 0], y: [0, 100] }}
                    className={styles.booter} onClick={() => { booterReady ? setHideBooter(true) : setHideBooter(false) }} ref={myRef}>
                    <div className={styles.center}>
                        {/* <img className={styles.icon} src="/img/booter.gif" alt="" /> */}
                        <Typist avgTypingDelay={5} cursor={{ show: false }} onTypingDone={() => { setBooterReady(true) }} >
                            <p>RITHVIK System(s) <span style={{ color: 'lime' }}>v1.0.0-beta3</span> booting...</p>
                            <br />
                            <p style={{ color: 'gray' }}>Integrity check will now begin. Approximate wait time: 11.32s. Click anywhere start in unsafe mode.</p>
                            <br />
                            <Typist.Delay ms={1000} />
                            <p>Connecting to 127.0.0.1:1337...</p>
                            <Typist.Delay ms={500} />
                            <p>...</p>
                            <br />
                            <p>Verifying integrity...</p>
                            <Typist.Delay ms={500} />
                            <p>...</p>
                            <br />
                            <Typist.Delay ms={1000} />
                            <p style={{ color: 'yellow' }}>ALERT: INFECTED FILES HAVE BEEN LOCATED...</p>
                            <p style={{ color: 'orange' }}>ALERT: FAILED TO CLEAR INFECTED FILES...</p>
                            <p style={{ color: 'red' }}>Enter at your own risk...</p>
                            <br />
                            <p style={{ color: 'gray' }}>Click anywhere to proceed despite this warning.</p>
                        </Typist>
                    </div>
                </motion.div>
            </>}
        </AnimatePresence>
    </>
}