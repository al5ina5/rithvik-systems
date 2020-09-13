import Desktop from '../components/Desktop/Desktop'
import Taskbar from '../components/Taskbar/Taskbar'

export default function Index() {
    return <>
        <div className="computer">
            <Desktop />
            <Taskbar />
        </div>
    </>
}