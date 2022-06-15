import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import Dashboard from '../../../../layouts/DashboardLayout'

const EditPropertyPage: NextPage = ({estate}:any) => {

    const [name, setName] = useState(estate.name)
	const [description, setDescription] = useState(estate.description)
	const [type, setType] = useState(estate.type)
	const [price, setPrice] = useState(estate.price)
	const [region, setRegion] = useState(estate.region)
	const [bedrooms, setBedrooms] = useState(estate.bedrooms)
	const [bathrooms, setBathrooms] = useState(estate.bathrooms)
	const [surface, setSurface] = useState(estate.surface)

    const editEstate = async () => {
        const id = estate.id
		const res = await fetch(`http://localhost:5000/properties/${id}`, {
			method: 'PUT',
            credentials: 'include',
			body: JSON.stringify({id, name, description, type, price, region, bedrooms, bathrooms, surface}),
			headers: {'Content-Type': 'application/json'}
		})
		const response = await res.json()
		console.log("deleted")
	}

    const types = ["Apartament", "Detached house", "Villa", "Farm"]
	const regions = ["Abruzzo", "Aosta Valley", "Apulia", "Basilicata", "Calabria", "Campania",
				"Emilia-Romagna", "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardy", "Marche",
				"Molise", "Piedmont", "Sardinia", "Sicily", "Trentino-South Tyrol", "Tuscany",
				"Umbria", "Veneto"]

	return (
		<Dashboard>
            <div>
                <h2>EDIT ESTATE</h2>
                <span>name: </span>
                <input
                    type="text"
                    value={name}
                    width="200px"
                    onChange={(e) => setName(e.target.value)}
                /> <br />
                <span>descriprion: </span>
                <textarea
                    value={description}
                    cols={40}
                    rows={10}
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea> <br />
                <span>type: </span>
                <select defaultValue={estate.type} onChange={(e) => setType(e.target.value)}>
					{types.map((item, index) => <option key={index} value={item}>{item}</option>)}
				</select> <br />
                <span>price: </span>
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                /> <br />
                <span>region: </span>
                <select defaultValue={estate.region} onChange={(e) => setRegion(e.target.value)}>
					{regions.map((item, index) => <option key={index} value={item}>{item}</option>)}
				</select> <br />
                <span>bedrooms: </span>
                <input
                    type="text"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                /> <br />
                <span>bathrooms: </span>
                <input
                    type="text"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                /> <br />
                <span>surface: </span>
                <input
                    type="text"
                    value={surface}
                    onChange={(e) => setSurface(e.target.value)}
                />
            </div>

            <button onClick={editEstate}>Save the changes</button>
		</Dashboard>
		
	)
} 

export default EditPropertyPage

export async function getServerSideProps({params}: any) {

    const res = await fetch(`http://localhost:5000/properties/${params.id}`)
    const estate = await res.json()
    return { props: { estate }}

}

