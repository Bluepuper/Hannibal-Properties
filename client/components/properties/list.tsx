import Image from 'next/image'
import { FC, useState } from 'react';
import Filters from '../Filters';
import PropertyCard from './card'
import styles from '/styles/properties-list.module.scss'

const PropertiesList: FC = (estatesObject: any) => {

    const [estates, setEstates] = useState(Object.values(estatesObject))
    const [filteredEstates, setFilteredEstates] = useState(estates)
    const [search, setSearch] = useState('')

    // const searchFilter = (filterString: string) => {
    //     const filtered = estates.filter((estate: any) => {
    //         return estate.name.toLowerCase().includes(filterString.toLowerCase())
    //     })
    //     setFilteredEstates(filtered)
    // }

    const sortEstatesByPriceFromDown = () => {
        const sortedEstates = [...filteredEstates]
        sortedEstates.sort((a:any, b:any) => parseFloat(a.price) - parseFloat(b.price))
        setFilteredEstates(sortedEstates)
    }

    const sortEstatesByPriceFromUp = () => {
        const sortedEstates = [...filteredEstates]
        sortedEstates.sort((a:any, b:any) => parseFloat(b.price) - parseFloat(a.price))
        setFilteredEstates(sortedEstates)
        
    }

    const sortEstatesBySizeFromDown = () => {
        const sortedEstates = [...filteredEstates]
        sortedEstates.sort((a:any, b:any) => parseFloat(a.surface) - parseFloat(b.surface))
        setFilteredEstates(sortedEstates)
    }

    const sortEstatesBySizeFromUp = () => {
        const sortedEstates = [...filteredEstates]
        sortedEstates.sort((a:any, b:any) => parseFloat(b.surface) - parseFloat(a.surface))
        setFilteredEstates(sortedEstates)
        
    }

    const filterEstatesByRegion = (region: string) => {
        const preFilteredEstates = [...estates]
        setFilteredEstates(preFilteredEstates.filter((estate:any) => estate.region === region))
    }

    const filterEstatesByType = (type: string) => {
        const preFilteredEstates = [...estates]
        setFilteredEstates(preFilteredEstates.filter((estate:any) => estate.type === type))
    }

    return (
        <> 
        <div>
        
        <div className={styles.filtersContainer}>
            <Filters
                byPriceFromDown={sortEstatesByPriceFromDown}
                byPriceFromUp={sortEstatesByPriceFromUp}
                bySizeFromDown={sortEstatesBySizeFromDown}
                bySizeFromUp={sortEstatesBySizeFromUp}
                byRegion={filterEstatesByRegion}
                byType={filterEstatesByType}
            />
        </div>
            {/* <input onChange={(e) => {searchFilter(e.target.value)}} type="text" /> */}
        {/* <div className={styles.viewing}>Viewing {estates.length} of {estates.length} Homes in All locations</div> */}
        <div className={styles.devider}></div>
        </div>
        <div>
            {filteredEstates.length === 0
            ?
            <p>Sorry, there is no such houses</p>
            :
            filteredEstates.map((estate: any) => { return( <PropertyCard key={estate.id} {...estate}/> )})
            }
        </div>
        </>
    )
}

export default PropertiesList