import 'reset-css'
import '../windows10css/windows10.scss'

export default function App({ Component, pageProps }) {
    return <>
        <Component  {...pageProps} />
    </>
}