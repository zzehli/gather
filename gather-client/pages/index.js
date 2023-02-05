import styles from "../styles/Home.module.css"
import { useSocket } from '../context/socketContext'
import Messages from '../components/Messages';
import Rooms from '../components/Rooms';
import { useRef } from 'react';

export default function Home() {
    const { username, setUsername } = useSocket();
    const usernameRef = useRef(null);

    function handleSetUsername() {
        const value = usernameRef.current.value
        if (!value) {
            return;
        }

        setUsername(value);
    }

    return (<div>
        {!username && (

            <div className={styles.usernameWrapper}>
                <div className={styles.usernameInner}>
                    <span className={styles.logo}>Gather</span>
                    <span className={styles.title}>Register</span>
                    <form onSubmit={handleSetUsername}>
                        <input type="text" required placeholder="username" ref={usernameRef} />
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>)}
        {username && (
            <div className={styles.container}>
                <Rooms />
                <Messages />
            </div>)}

    </div>)
}
