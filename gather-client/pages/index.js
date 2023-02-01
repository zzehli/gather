import styles from "../styles/Home.module.css"
import { useSocket } from '../context/socketContext'
import Messages from '../components/Messages';
import Rooms from '../components/Rooms';
import { useEffect, useRef } from 'react';

export default function Home() {
    const { username, setUsername } = useSocket();
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
            //      <div className='formContainer'>
            //      <div className='formWrapper'>
            //          <span className="logo">Gather</span>
            //          <span className="title">Register</span>
            //          <form>
            //              <input type="email" placeholder='email'/>
            //              <input type="password" placeholder='password'/>
            //              <button>Sign in</button>
            //          </form>
            //      <p>You don't have an account? Register</p>
            //      </div>
            //  </div>
            <div className={styles.usernameWrapper}>
                <div className={styles.usernameInner}>
                    <span className={styles.logo}>Gather</span>
                    <span className={styles.title}>Register</span>
                    <form onSubmit={handleSetUsername}>
                        <input type="username" placeholder="username" ref={usernameRef} />
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
