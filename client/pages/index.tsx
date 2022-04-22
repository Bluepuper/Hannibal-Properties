import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SwiperComponent from '../components/swiper/swiper'
import MainLayout from '../layouts/MainLayout'
import styles from '../styles/welcome.module.scss'

const Home: NextPage = () => {
    return (
        <MainLayout>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.swiperContainer}>
                <SwiperComponent/>
            </div>
            <div className="">

            </div>
        </MainLayout>
        
    )
}

export default Home