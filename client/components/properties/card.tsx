import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from '/styles/header.module.scss'


const PropertyCard: FC = (estate: any) => {

    return (
        <div>
            <div className={styles.img}>
                {estate.images.length > 0? <img src={estate.images[0].link} height="100%"/> : <img alt="there should be an image, something went wrong"/>}
            </div>
            <div>
                <div>{estate.name}</div>
                <div className='textAccent1'>{"€"+estate.price}</div>
                <div className='textSecondary'>{estate.description}</div>
                <Link href={`/properties/${estate.id}`}><button>see details</button></Link>
            </div>
            
            
        </div>
    )
}

export default PropertyCard