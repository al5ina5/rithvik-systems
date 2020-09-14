import Typist from 'react-typist'

import styles from './Booter.module.scss'

export default function Booter() {
    return <>
        <div className={styles.booter}>
            <div className={styles.center}>
                <img class={styles.icon} src="/img/booter.gif" alt="" />
                <Typist avgTypingDelay={20} cursor={{ show: false }} >
                    <p>RITHVIK System(s) <span style={{ color: 'lime' }}>v1.0.0-beta3</span> booting...</p>
                    <p>Verifying integrity...</p>
                    <Typist.Delay ms={500} />
                    <p>...</p>
                    <br />
                    <Typist.Delay ms={1000} />
                    <p style={{ color: 'yellow' }}>ALERT: INFECTED FILES HAVE BEEN LOCATED...</p>
                    <p style={{ color: 'orange' }}>ALERT: FAILED TO CLEAR INFECTED FILES...</p>
                    <p style={{ color: 'red' }}>Enter at your own risk...</p>
                    <br />
                    <p style={{ color: 'gray' }}>Click anywhere to continue.</p>
                </Typist>
                <br />
            </div>
        </div>
    </>
}