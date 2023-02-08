import styles from "../styles/Home.module.css"
import { useSocket } from '../context/socketContext'
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter()
    const { username, setUsername } = useSocket();
    const usernameRef = useRef(null);

    function handleSetUsername() {
        const value = usernameRef.current.value
        if (!value) {
            return;
        }

        setUsername(value);
        router.push('/chat');
    }

    return (<div>
        {!username && (

            <div className={styles.usernameWrapper}>
                <div className={styles.usernameInner}>
                    <span className={styles.logo}>Gather</span>
                    <span className={styles.title}>Register</span>
                    <form onSubmit={handleSetUsername}>
                        <input type="text" required placeholder="Create your username" ref={usernameRef} />
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>)}


    </div>)
}
