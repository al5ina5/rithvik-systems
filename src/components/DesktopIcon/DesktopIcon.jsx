import styles from './DesktopIcon.module.scss'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function DesktopIcon(props) {
    const router = useRouter()

    return <>
        <motion.a drag={true} onDoubleClick={() => {
            props.href ? router.push(props.href) : null
        }} className={`${styles.desktopIcon} ${props.active ? styles.active : null}`}>
            <span className={`${styles.icon} iconify`} data-icon={props.icon} data-inline="false"></span>
            <div className={styles.name}>{props.name}</div>
        </motion.a>
    </>
}