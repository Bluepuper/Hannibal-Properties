import { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import PropertySwiper from "../../components/swiper/propertySwiper"
import MainLayout from "../../layouts/MainLayout"
import styles from "/styles/property-info.module.scss"

const PropertyPage: NextPage = ({estate}:any) => {

    const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
    const [isContacted, setIsContacted] = useState(false)


    const onSubmitHandler = async (e:any) => {
        e.preventDefault()
        const res = await fetch('../../api/message/create', {
			method: 'POST',
			body: JSON.stringify({propertyId: estate.id, firstName, lastName, phone, email, message}),
			headers: {'Content-Type': 'application/json'}
		})
        const response = await res.json()
        setIsContacted(response.isCreated)
    }

    return(
        <MainLayout>
            <Head>
                <title>{estate.name} | Hannibal Properties</title>
                <meta name="description" content={estate.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>

                <section className={styles.infoMain}>
                    <div className={styles.swiper}>
                        <PropertySwiper {...estate.images} />
                    </div>
                    {/* <div className={styles.imgs}>
                        {estate.images.length ?
                        estate.images.map((image: any) => {
                            return(
                                <div><img src={image.link} height={600}/></div>
                            )
                        })
                        :
                        null
                        }
                    </div> */}
                    <div className={styles.title}>
                        <p>{estate.name}</p>
                    </div>
                    <div className={`${styles.desc} textSecondary`}>
                        <p>{estate.description}</p>
                    </div>
                </section>

                <section  className={`${styles.infoSide} textSecondary`}>
                    <div className={`${styles.cardInfo} textSecondary`}>
                        <div>
                            <span>Price: </span> <span>€{estate.price}</span>
                        </div>
                        <div>
                            <span>Region: </span> <span>{estate.region}</span>
                        </div>
                        <div>
                            <span>Type: </span> <span>{estate.type}</span>
                        </div>
                        <div>
                            <span>Bedrooms: </span> <span>{estate.bedrooms}</span>
                        </div>
                        <div>
                            <span>Bathrooms: </span> <span>{estate.bathrooms}</span>
                        </div>
                        <div>
                            <span>Surface: </span> <span>{estate.surface}</span>
                        </div>
                    </div>

                    <div className={styles.cardContact}>
                        {isContacted?
                        <span>Thanks for contacting us</span>
                        :
                        <>
                            <span>For more information about this house contact us:</span>
                            <form method="post" onSubmit={e => {onSubmitHandler(e)}}>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <input
                                    type="phone"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <textarea
                                    cols={30}
                                    rows={10}
                                    placeholder="Your message"
                                    value={message}
                                    onChange={(e) => {
                                        if (e.target.value.length < 500) {setMessage(e.target.value)}
                                    }}
                                ></textarea>

                                <input type="submit" value="SEND" />
                            </form>
                        </>
                        }
                        
                    </div>
                    
                </section>

                
                
                
                
                
            </div>
        </MainLayout>
    )
}
export default PropertyPage

export async function getServerSideProps({params}: any) {

    const res = await fetch(`http://localhost:5000/properties/${params.id}`)
    const estate = await res.json()
    return { props: { estate }}

}