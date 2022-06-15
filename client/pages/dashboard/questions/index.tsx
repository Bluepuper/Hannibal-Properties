import type { NextPage } from 'next'
import Link from 'next/link'
import Dashboard from '../../../layouts/DashboardLayout'
import styles from "/styles/dashboardQuestions.module.scss"

const DashboardQuestionsPage: NextPage = ({questions}:any) => {
	console.log(questions)
	return (
		<Dashboard>
			<div className={styles.container}>
					<ul>
						<li className={`${styles.tableHeader} ${styles.li}`}>
							<div className={`${styles.col} ${styles.col1}`}>Pr-ty Id</div>
							<div className={`${styles.col} ${styles.col2}`}>First name</div>
							<div className={`${styles.col} ${styles.col3}`}>Second name</div>
							<div className={`${styles.col} ${styles.col4}`}>Phone</div>
							<div className={`${styles.col} ${styles.col5}`}>Email</div>
							<div className={`${styles.col} ${styles.col6}`}>Message</div>
						</li>
						{questions.map((question: any) => (
								<li key={question.id} className={`${styles.tableRow} ${styles.li}`}>
									<div className={`${styles.col} ${styles.col1}`}> {question.propertyId} </div>
									<div className={`${styles.col} ${styles.col2}`}> {question.firstName} </div>
									<div className={`${styles.col} ${styles.col3}`}> {question.lastName} </div>
									<div className={`${styles.col} ${styles.col4}`}> {question.phone}</div>
									<div className={`${styles.col} ${styles.col5}`}> {question.email} </div>
									<div className={`${styles.col} ${styles.col6}`}> {question.message} </div>
								</li>
							
							// <div key={estate.id}>
							// <Link href={`./properties/view/${estate.id}`}>
							// <a>{estate.name}</a>
							// </Link>
							// </div>
						))}
						
					</ul>
				</div>

		</Dashboard>
	)
}

export default DashboardQuestionsPage

export async function getStaticProps() {

	const res = await fetch('http://localhost:5000/properties/questions/get', {
        method: 'GET',
    })
	const questions = await res.json()
	console.log(questions)
	
	return { props: { questions }}
  
}