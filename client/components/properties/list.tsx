import Image from 'next/image'
import { FC } from 'react';
import PropertyCard from './card'
import styles from '/styles/properties-list.module.scss'



const PropertiesList: FC = (estatesObject: any) => {
    const estates = Object.values(estatesObject)
    
    return (
        <> 
            {estates.map((estate: any) => {
                return(
                    <PropertyCard {...estate}/>
                )
            })}
        </>
    )
}

export default PropertiesList