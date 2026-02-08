import '../styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);
    return <Component {...pageProps} />;
}