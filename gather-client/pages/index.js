import { useSocket } from '../context/socketContext'
import Messages from '../components/Messages';
import Rooms from '../components/Rooms';
import { useRef } from 'react';
// TODO https://youtu.be/a_xo-SbIfUQ?t=1959 skipped styling
export default function Home() {
    const { socket, username, setUsername } = useSocket();
    const usernameRef = useRef(null);

    function handleSetUsername(){
        const value = usernameRef.current.value
        if (!value){
            return;
        }

        setUsername(value);

        localStorage.setItem("username", value);
    }
    return (<div>
    {!username && <div>
        <input placeholder="username" ref={usernameRef}/>
        <button onClick={handleSetUsername}>Submit</button>
    </div>}
    {username && <>
        <Messages></Messages>
        <Rooms></Rooms>
    </>}
        
    </div>)
}
