import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Dashboard from '../../layouts/DashboardLayout'


const DashboardLogin: NextPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const router = useRouter()

    

    const submit = async (e:any) => {
        e.preventDefault()
        // const response = await 
        fetch("http://localhost:5000/auth/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(async res => {
            console.log('RES ', res)
			const response = await res.json()
                console.log('RESP ', response)
            if (response.token) {
                console.log("AUTHENTICATED")
                router.push('/dashboard')
            } else {
                setMessage('Incorrect')
            }
		})
        .catch(console.log)
        

    }
	return (
		<>
            {message}
            <form onSubmit={(e) => submit(e)}>
                <input
                    type="text"
                    value={username}
                    placeholder="username"
                    onChange={(e) => {setUsername(e.target.value)}}
                />
                <input
                    type="text"
                    value={password}
                    placeholder="password"
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <input type="submit" value="LOG IN"/>
            </form>
            
        </>
	)
} 

export default DashboardLogin

// export async function getStaticProps(context: any) {
  
//     console.log('CONTEXT ', context)
//     // if (true) {
//     //   return {
//     //     redirect: {
//     //       destination: '/',
//     //       permanent: false,
//     //       // statusCode: 301
//     //     },
//     //   }
//     // }
  
//     return {
//       props: { }
//     }
//   }
