import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react';
import Dashboard from '../../../layouts/DashboardLayout';

const DashboardPropertiesPage: NextPage = ({estates}:any) => {
	const [search, setSearch] = useState('')
	return (
		<Dashboard>
			<div>
				{estates.map((estate: { id: number; name: string }) => (
				<div key={estate.id}>
					<Link href={`./properties/view/${estate.id}`}>
					<a>{estate.name}</a>
				</Link>
				</div>
			))}
			<Link href={`./properties/create`}>
				<a>------ ADD NEW ESTATE ------</a>
			</Link>
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