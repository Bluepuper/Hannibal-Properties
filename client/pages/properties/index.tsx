import type { NextPage } from 'next'
import Link from 'next/link'
import MainLayout from '../../layouts/MainLayout'
import styles from '../../styles/properties-list.module.scss'
import PropertiesList from '../../components/properties/list'

const PropertiesPage: NextPage = ({estates}:any) => {
	console.log("RENDER")
	return (
		<MainLayout>
			<div className={styles.container}>
				<div className={styles.filtersContainer}>
					filters
				</div>
				<div className={styles.listContainer}>
				<PropertiesList {...estates}/>
			</div>
			</div>
			
			
			
			
		</MainLayout>
	)
} 

export default PropertiesPage

export async function getStaticProps() {

  const res = await fetch(`http://localhost:5000/properties`)
  const estates = await res.json()

  return { props: { estates }}

}

