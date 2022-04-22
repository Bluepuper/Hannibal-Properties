import styles from '/styles/navbar.module.scss'
import { useRouter } from 'next/router' 
import Link from 'next/link'

const NavBar = () => {

    const router = useRouter()
    const menu = [
        {
            name: 'Properties',
            link: '/dashboard/properties'
        },
        {
            name: 'Questions',
            link: '/dashboard/questions'
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.title}>ADMIN PANEL</div>
            <div className={styles.devider}></div>
            <div className={styles.items}>
                {menu.map((item) => {
                    return(
                        <Link href={item.link} key={item.name}>
                            <div
                            className={router.asPath.includes(item.link) ? styles.item + ' ' + styles.active : styles.item}
                            >
                                {item.name}
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div></div>

        </div>
    )
}

export default NavBar