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
	}

	return (
		<Dashboard>
            <div>
                <h2>{estate.name}</h2>
                {/* <p>name: {estate.name}</p> */}
                <p>desc: {estate.description}</p>
                <p>type: {estate.type}</p>
                <p>price: {estate.price}</p>
                <p>region: {estate.region}</p>
                <p>begrooms: {estate.begrooms}</p>
                <p>bathrooms: {estate.bathrooms}</p>
                <p>surface: {estate.surface}</p>
                {estate.images.length ?
                    estate.images.map((image: any) => {
                        return(
                            <div><img src={image.link} width="500px"/></div>
                        )
                    })
                    :
                    null
                }
            </div>
            <Link href={`../edit/${estate.id}`}>
                <button>Edit this estate</button>
            </Link>

                <a href="./delete">
                    <button onClick={deleteEstate}>Delete this estate</button>
                </a>
                

            
		</Dashboard>
		
	)
} 

export default EditPropertyPage

export async function getServerSideProps({params}: any) {

    const res = await fetch(`http://localhost:5000/properties/${params.id}`)
    const estate = await res.json()
    return { props: { estate }}

}

