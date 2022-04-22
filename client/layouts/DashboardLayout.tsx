import React from 'react'
import NavBar from '../components/navbar/navbar'

const Dashboard: React.FC<{children: any}> = ({ children }) => {
    return(
        <main style={{width: '100vw', height:'100vh', display: 'flex'}}>
            <section style={{width:'270px', height:'100vh'}}>
                <NavBar/>
            </section>

            <section style={{width: 'calc(100% - 270px)', height: '100vh', padding: '40px', overflow: 'auto'}}>
                {children}
            </section>
        </main>
    )
}

export default Dashboard