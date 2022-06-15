import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Dashboard from '../../layouts/DashboardLayout'

const DashboardLogout: NextPage = ({user}:any) => {
	const router = useRouter()

	useEffect( () => {
		fetch(`http://localhost:5000/auth/logout`, {
            method: 'post',
            credentials: 'include'
        })
		.then(async res => {
			const response = await res.json()
            console.log()
            await router.push('/dashboard/login')
		})
	}, [])
	return (
        <Dashboard>
            
        </Dashboard>
    )
	
} 

export default DashboardLogout

// export async function getStaticProps() {
//     const res = await fetch(`http://localhost:5000/auth/user`, {
// 		credentials: 'include'
// 	})
//     const user = await res.json()
  
//     return { props: { user }}
  
// }
