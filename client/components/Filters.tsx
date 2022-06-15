import { FC } from 'react';
import styles from '/styles/properties-list.module.scss'

const Filter = (props: any) => {
    return (
        <>
            <button className='textPrimary'>
                <span>{props.buttonName}</span>
                <ul>
                    {props.buttonFilters.map( (item: string, index:number) => { return (
                        <li key={index}>{item}</li>
                    )})}
                </ul>
                
            </button>
        </>
    )
}

interface FuncProps {
    byPriceFromDown: (values: any) => void
    byPriceFromUp: (values: any) => void
    bySizeFromDown: (values: any) => void
    bySizeFromUp: (values: any) => void
    byRegion: (values: any) => void
    byType: (values: any) => void
}

const Filters: FC<FuncProps> = (props: any) => {
    const filtersData = [
        {
            name: "PRICE",
            properties: [
                "From down to up",
                "From up to down"
            ]
        },
        {
            name: "TYPE",
            properties: ["Apartament", "Detached house", "Villa", "Farm"]
        },
        {
            name: "SIZE",
            properties: [
                "From down to up",
                "From up to down"
            ]
        },
        {
            name: "REGION",
            properties: ["Abruzzo", "Aosta Valley", "Apulia", "Basilicata", "Calabria", "Campania",
            "Emilia-Romagna", "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardy", "Marche",
            "Molise", "Piedmont", "Sardinia", "Sicily", "Trentino-South Tyrol", "Tuscany",
            "Umbria", "Veneto"]
        },
    ]
    return (
        <> 
            {filtersData.map(({name, properties}, index) => {
                if (name === "PRICE") {
                    return (
                        <>
                            <button key={1} className='textPrimary'>
                                <span>{name}</span>
                                <ul>
                                    {properties.map( (item: string, index:number) => {
                                        if (index === 0) {
                                            return (<li onClick={() => props.byPriceFromDown()} key={index}>{item}</li>)
                                        } else {
                                            return (<li onClick={() => props.byPriceFromUp()} key={index}>{item}</li>)
                                        }
                                    })}
                                </ul>
                            </button>
                        </>
                    )
                }
                if (name === "TYPE") {
                    return (
                        <>
                            <button key={2} className='textPrimary'>
                                <span>{name}</span>
                                <ul>
                                    {properties.map( (item: string, index:number) => { return (
                                        <li onClick={() => props.byType(item)} key={index}>{item}</li>
                                    )})}
                                </ul>
                            </button>
                        </>
                    )
                }
                if (name === "SIZE") {
                    return (
                        <>
                            <button key={3} className='textPrimary'>
                                <span>{name}</span>
                                <ul>
                                    {properties.map( (item: string, index:number) => { 
                                        if (index === 0) {
                                            return (<li onClick={() => props.bySizeFromDown()} key={index}>{item}</li>)
                                        } else {
                                            return (<li onClick={() => props.bySizeFromUp()} key={index}>{item}</li>)
                                        }
                                    })}
                                </ul>
                            </button>
                        </>
                    )
                }
                if (name === "REGION") {
                    return (
                        <>
                            <button key={4} className='textPrimary'>
                                <span>{name}</span>
                                <ul>
                                    {properties.map( (item: string, index:number) => { return (
                                        <li onClick={() => props.byRegion(item)} key={index}>{item}</li>
                                    )})}
                                </ul>
                            </button>
                        </>
                    )
                }
                
            })}
        </>
    )
}



export default Filters