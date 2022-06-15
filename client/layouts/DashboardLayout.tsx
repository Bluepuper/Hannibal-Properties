import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/navbar/navbar'

const Dashboard: React.FC<any> = (props) => {
	const [isAuth, setIsAuth] = useState<boolean>(false)
    const router = useRouter()
    
    useEffect( () => {
		fetch(`http://localhost:5000/auth/isAuthenticated`,{
            method: 'post',
            credentials: 'include',
        })
		.then(async res => {
			const response = await res.json()
			if (response !== true) {router.push('/dashboard/login')}
			setIsAuth(response)
		})

	}, [])
    if (isAuth === true) {
        return (
            <>
                <Head>
                    <title>Dashboard | Hannibal Properties</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main style={{width: '100vw', height:'100vh', display: 'flex'}}>
                    <section style={{width:'270px', height:'100vh'}}>
                        <NavBar/>
                    </section>

                    <section style={{width: 'calc(100% - 270px)', height: '100vh', padding: '40px', overflow: 'auto'}}>
                        {props.children}
                    </section>
                </main>
            </>
        )
    } else {

        return <></>
    }
    

    
}

export default Dashboard