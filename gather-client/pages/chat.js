import styles from "../styles/Chat.module.css"
import Messages from '../components/Messages';
import Rooms from '../components/Rooms';

export default function Chat(){
    return (
            <div className={styles.container}>
                <Rooms />
                <Messages />
            </div>
    )
}
