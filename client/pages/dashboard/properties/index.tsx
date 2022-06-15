import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react';
import Dashboard from '../../../layouts/DashboardLayout';
import styles from "/styles/dashboardProperties.module.scss"

const DashboardPropertiesPage: NextPage = ({estates}:any) => {
	const [search, setSearch] = useState('')
	
	return (
		<Dashboard>
			<div>
				<div className={styles.container}>
					<ul>
						<li className={`${styles.tableHeader} ${styles.li}`}>
							<div className={`${styles.col} ${styles.col1}`}>Id</div>
							<div className={`${styles.col} ${styles.col2}`}>Name</div>
							<div className={`${styles.col} ${styles.col3}`}>Price</div>
							<div className={`${styles.col} ${styles.col4}`}>Description</div>
							<div className={`${styles.col} ${styles.col5}`}>Bathrooms</div>
							<div className={`${styles.col} ${styles.col6}`}>Bedrooms</div>
							<div className={`${styles.col} ${styles.col7}`}>Surface</div>
						</li>
						<Link href={`./properties/create`}>
							<a>------ ADD NEW ESTATE ------</a>
						</Link>
						{estates.map((estate: any) => (
							<Link key={estate.id} href={`./properties/view/${estate.id}`}>
								<li className={`${styles.tableRow} ${styles.li}`}>
									<div className={`${styles.col} ${styles.col1}`}> {estate.id} </div>
									<div className={`${styles.col} ${styles.col2}`}> {estate.name} </div>
									<div className={`${styles.col} ${styles.col3}`}> €{estate.price} </div>
									<div className={`${styles.col} ${styles.col4}`}> {estate.description.slice(0,160)}... </div>
									<div className={`${styles.col} ${styles.col5}`}> {estate.bathrooms} </div>
									<div className={`${styles.col} ${styles.col6}`}> {estate.bedrooms} </div>
									<div className={`${styles.col} ${styles.col7}`}> {estate.surface}m² </div>
								</li>
							</Link>
							
							// <div key={estate.id}>
							// <Link href={`./properties/view/${estate.id}`}>
							// <a>{estate.name}</a>
							// </Link>
							// </div>
						))}
						
					</ul>
				</div>
			</div>
		</Dashboard>
	)
}

export default DashboardPropertiesPage

export async function getServerSideProps() {

	const res = await fetch(`http://localhost:5000/properties`, {
		credentials: 'include'
	})
	const estates = await res.json()
	console.log("------------------------------WITH CREDS------------------------------")
	console.log("ESTATES: ",estates)
  
	return { props: { estates }}
}