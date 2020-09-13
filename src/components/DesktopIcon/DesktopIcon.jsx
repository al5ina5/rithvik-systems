import styles from './DesktopIcon.module.scss'
import { motion } from 'framer-motion'

export default function DesktopIcon(props) {
    return <>
        <motion.div drag={true} onDoubleClick={props.onDoubleClick} className={`${styles.desktopIcon} ${props.active ? styles.active : null}`}>
            <span className={`${styles.icon} iconify`} data-icon={props.icon} data-inline="false"></span>
            <div className={styles.name}>{props.name}</div>
        </motion.div>
    </>
}