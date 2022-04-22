import styles from '/styles/footer.module.scss'
import { useRouter } from 'next/router' 
import Link from 'next/link'

const Footer = () => {

    const router = useRouter()

    return (
        <div className={`${styles.container} bgPrimary`}>
            <div>
                <p>Copyright © 2012-{(new Date()).getFullYear()} HannibalProperties All Rights Reserved</p>
            </div>
            <div>
                <p>Hannibal Properties</p>
                <p>Owner Karin Wienand</p>
                <p>Località Fontine, 10, 06069 Tuoro sul Trasimeno, Umbria, Italia</p>
                <p>Phone: <a className='textAccent2' href="tel:+390757816305">+39 (075) 781-63-05</a></p>
                <p>Cell: <a className='textAccent2' href="tel:+393484326800">+39 (348) 432-68-00</a></p>
            </div>
        </div>
    )
}

export default Footer