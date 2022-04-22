import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

const MainLayout: React.FC<{children: any}> = ({ children }) => {
    return(
        <div style={{width: '100%', minHeight:'100vh'}}>
            <header style={{width:'100%', height:'150px'}}>
                <Header/>
            </header>
            <main style={{width:'100%', minHeight:'Calc(100vh - 150px)'}}>
                {children}
            </main>
            <footer style={{width: '100%'}}>
                <Footer/>
            </footer>
        </div>
    )
}

export default MainLayout