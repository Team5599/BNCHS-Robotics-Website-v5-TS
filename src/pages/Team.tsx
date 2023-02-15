import Head from 'next/head'
import Image from 'next/image'
import { InferGetServerSidePropsType } from 'next'

import Navbar from '@/components/Navbar/Navbar'

import styles from '@/styles/Home.module.css'

export async function getServerSideProps() {

    // Fetch data from external API
    const res = await fetch(`https://www.team5599.com/api/team`)
    const data : {message : string, payload : any[] } = await res.json()
  
    return {
        props: { data }, // will be passed to the page component as props
    }

}

export default function Team( { data } : InferGetServerSidePropsType<typeof getServerSideProps>) {

    console.log("data", data);

    return (
        <>
            <Head>
                <title>The Sentinels - FRC Team 5599</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <div style={{display : 'flex', height : '40vh', justifyContent : 'center', alignItems : 'center'}}>
                    <span>
                        <em>Nothing here yet</em>
                    </span>
                </div>
            </main>
        </>
    )
}