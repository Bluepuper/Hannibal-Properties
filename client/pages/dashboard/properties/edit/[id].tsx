import type { NextPage } from 'next'
import Link from 'next/link'
import Dashboard from '../../../../layouts/DashboardLayout'

const EditPropertyPage: NextPage = ({estate}:any) => {

    const deleteEstate = async () => {
        const id = estate.id
		const res = await fetch(`../../../api/property/delete`, {
			method: 'POST',
			body: JSON.stringify({id: id}),
			headers: {'Content-Type': 'application/json'}
		})
		const response = await res.json()
		console.log("deleted")
	}

	return (
		<Dashboard>
            <div>
                <h2>EDIT ESTATE</h2>
                <p>name: {estate.name}</p>
                <p>desc: {estate.description}</p>
                <p>type: {estate.type}</p>
                <p>price: {estate.price}</p>
                <p>region: {estate.region}</p>
                <p>begrooms: {estate.begrooms}</p>
                <p>bathrooms: {estate.bathrooms}</p>
                <p>surface: {estate.surface}</p>
            </div>

            <button onClick={deleteEstate}>Delete this estate</button>
		</Dashboard>
		
	)
} 

export default EditPropertyPage

export async function getServerSideProps({params}: any) {

    const res = await fetch(`http://localhost:5000/properties/${params.id}`)
    const estate = await res.json()
    return { props: { estate }}

}

