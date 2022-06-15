import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Dashboard from '../../../../layouts/DashboardLayout'

const ViewPropertyPage: NextPage = ({estate}:any) => {
    const router = useRouter()
    const [error, setError] = useState('')

    const deleteEstate = async () => {
        await fetch(`http://localhost:5000/properties/${estate.id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*', 
                'Access-Control-Allow-Credentials' : 'true',
            }
        })
        .then(res => res.json())
		.then(answ => answ === 1 ? router.push('/dashboard/properties'): answ)
        .catch(err => console.log('err ', err))
	}

	return (
		<Dashboard>
            {estate ?
            <div>
                <h2>{estate.name}</h2>
                {/* <p>name: {estate.name}</p> */}
                <p>desc: {estate.description}</p>
                <p>type: {estate.type}</p>
                <p>price: {estate.price}</p>
                <p>region: {estate.region}</p>
                <p>begrooms: {estate.bedrooms}</p>
                <p>bathrooms: {estate.bathrooms}</p>
                <p>surface: {estate.surface}</p>
                {estate.images.length ?
                    estate.images.map((image: any, index: number) => {
                        return(
                            <div key={index}><img src={image.link} width="500px"/></div>
                        )
                    })
                    :
                    null
                }
            </div>
            :
            <div>there is no such estate</div>
            }
            
            <Link href={`../edit/${estate.id}`}>
                <button>Edit this estate</button>
            </Link>
            <button onClick={deleteEstate}>Delete this estate</button>
                

            
		</Dashboard>
		
	)
} 

export default ViewPropertyPage

export async function getServerSideProps({params}: any) {

    const res = await fetch(`http://localhost:5000/properties/${params.id}`)
    const estate = await res.json()
    return { props: { estate }}

}

