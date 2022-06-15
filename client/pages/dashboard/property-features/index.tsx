import type { NextPage } from 'next'
import { useState } from 'react';
import Dashboard from '../../../layouts/DashboardLayout';

const DashboardPropertiesPage: NextPage = ({estates}:any) => {
	const [search, setSearch] = useState('')
    const [types, setTypes] = useState(new Array())
    const [regions, setRegions] = useState(new Array())

    const mockFeatures = [
        {
            "type": "apartaments"
        },
        {
            "type": "detached house"
        },
        {
            "region": "Tuscany"
        },
        {
            "region": "Rome"
        },
        {
            "type": "villa"
        },
        {
            "region": "Milan"
        },
    ]

    const mockTypes = new Array()
    const mockRegions = new Array()

    mockFeatures.map((item) => {
        const key = Object.getOwnPropertyNames(item)[0]
        if (key === "type") {
            mockTypes.push(item.type)
        } else {
            mockRegions.push(item.region)
        }
    })


	return (
		<Dashboard>
            <div>
                <p>Estates' types</p>
                <ul>
                    {mockTypes.map((item, index) => {return <li key={index}>{item}</li>})}
                </ul>
            </div>
            <div>
                <p>Estates' regions</p>
                <ul>
                    {mockRegions.map((item, index) => {return <li key={index}>{item}</li>})}
                </ul>
            </div>
		</Dashboard>
	)
}

export default DashboardPropertiesPage

export async function getStaticProps() {

	const res = await fetch(`http://localhost:5000/properties`)
	const estates = await res.json()
  
	return { props: { estates }}
  
  }