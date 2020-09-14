import Booter from '../components/Booter/Booter'
import Desktop from '../components/Desktop/Desktop'
import Taskbar from '../components/Taskbar/Taskbar'

export default function Index() {
    return <>
        <div className="computer">
            <Booter />
            <Desktop />
            <Taskbar />
        </div>
    </>
}