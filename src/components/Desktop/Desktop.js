import DesktopIcon from '../DesktopIcon/DesktopIcon'

export default function Desktop() {
    return <>
        <style jsx>{`
        .desktop {
            color: white;
            padding: 2rem;
        }    
    `}</style>
        <div className="desktop">
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
    </>
}