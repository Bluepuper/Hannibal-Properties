import { useRouter } from 'next/router' 
import Image from 'next/image'
import logo from '../../public/logo.png'
import styles from '/styles/header.module.scss'


const Header = () => {

    const router = useRouter()

    return (
        <div className={`${styles.container} bgPrimary`}>
            <Image src={logo} height={115} width={150}></Image>
        </div>
    )
}

export default Header