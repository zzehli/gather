import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useSocket } from '../context/socketContext'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const { socket } = useSocket();
    return <div>{socket.id}</div>
}
