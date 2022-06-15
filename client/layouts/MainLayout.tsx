import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

const MainLayout: React.FC<{children: any}> = ({ children }) => {
    return(
        <div style={{width: '100%', minHeight:'100vh'}}>
            <header
                className={`bgHeader`}
                style={{width:'100%', height:'150px'}}
            >
                <Header/>
            </header>
            <main
                className={`bgPrimary`}
                style={{width:'100%', minHeight:'Calc(100vh - 150px)'}}
            >
                {children}
            </main>
            <footer
                className={`bgFooter`}
                style={{width: '100%'}}
            >
                <Footer/>
            </footer>
        </div>
    )
}

export default MainLayout