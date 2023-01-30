import styles from "../styles/Home.module.css"
import { useSocket } from '../context/socketContext'
import Messages from '../components/Messages';
import Rooms from '../components/Rooms';
import { useEffect, useRef } from 'react';

export default function Home() {
    const { socket, username, setUsername } = useSocket();
    const usernameRef = useRef(null);

    function handleSetUsername() {
        const value = usernameRef.current.value
        if (!value) {
            return;
        }

        setUsername(value);

        localStorage.setItem("username", value);
    }

    useEffect(() => {
        if (usernameRef) {
            usernameRef.current.value = localStorage.getItem('username') || ""
        }
    }, [])

    return (<div>
        {!username && (
            <div className={styles.usernameWrapper}>
                <div className={styles.usernameInner}>
                    <input placeholder="username" ref={usernameRef} />
                    <button onClick={handleSetUsername}>Submit</button>
                </div>
            </div>)}
        {username && (
            <div className={styles.container}>
                <Rooms/>
                <Messages/>
            </div>)}

    </div>)
}
