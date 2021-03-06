import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SwiperComponent from '../components/swiper/swiper'
import MainLayout from '../layouts/MainLayout'
import styles from '../styles/welcome.module.scss'

const Home: NextPage = ({estates}:any) => {
    
    return (
        <MainLayout>
            <Head>
                <title>Italian Real Estate | Hannibal Properties</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.swiperContainer}>
                <SwiperComponent {...estates}/>
            </div>
            <main>
                <section className={styles.main}>
                    <div className={styles.about}>
                        <div className={styles.left}>
                            <div className={styles.title}>
                                Welcome to our website! We at Hannibal Properties offer a selection of properties in Umbria and Tuscany.
                            </div>
                            <div className={styles.subtitle}>
                                Wether you are looking for a Farmhouse in Tuscany or an apartment in Umbria we will find it for you. We will assist you in the whole process of finding and buying a property. All properties are previously carefully checked by us.
                            </div>
                        </div>
                        <div className={styles.right}>
                            <img src="/welcome.JPG" height="300px" />
                        </div>
                    </div>
                    <div className={styles.who}>
                        <div className={styles.left}>
                            <div className={styles.title}>
                                <span></span>
                                Who we are
                            </div>
                            <div className={styles.subtitle}>
                                Located in Umbria, Tuoro a little town at the shores of Lake Trasimeno, Hannibal Properties offers you a multilingual service (English, German, Dutch, and Italian) to make you feel completely at ease during this exciting experience. We focus on the Real Estate market in southern Tuscany and northern Umbria, firmly believing in the great heritage of this unique part of Italy. <br /> <br />
                                Unspoiled nature as well as outstanding art cities and architure are within reach from most parts of this area. Combined with the friendliness of the local people, the quality of the food and vine and the countless good Restaurants located in beautiful medieval hilltop villages add an unvaluable experience. Once you have found your own piece of Italy we will help you with all the necessary steps to settle down smoothly in your new Italian home.
                            </div>
                        </div>
                        <div className={styles.right}>
                            <img src="/fimaa.png" width="180px" />
                            <div>
                                Hannibal Properties is a member of the Italian Real Estate association F.I.M.A.A
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
        
    )
}

export default Home

export async function getStaticProps(context: any) {
    const res = await fetch(`http://localhost:5000/properties`)
    const estates = await res.json()
  
    return { props: { estates }}
  
}
