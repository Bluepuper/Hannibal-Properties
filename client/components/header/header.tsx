import { useRouter } from 'next/router' 
import Image from 'next/image'
import logo from '../../public/logo.png'
import styles from '/styles/header.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import { BADFLAGS } from 'dns'


const Header = () => {
    const [bgText, setBgText] = useState('BACKGROUND TEXT')
    const [isBgTextVisible, setVisibilityOfBgText] = useState<boolean>(false)
    const [isMenuVisible, setVisibilityOfMenu] = useState<boolean>(false)

    function onMouseEnterHandler(e: any) {
        setVisibilityOfBgText(true)
        setBgText(e.target.innerHTML.toUpperCase())
    }
    function onMouseLeaveHandler(e: any) {
        setVisibilityOfBgText(false)
        setBgText(e.target.innerHTML.toUpperCase())
    }
    const menuItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Properties',
            link: '/properties'
        },
        {
            name: 'Contact us',
            link: '/contacts'
        },
        // {
        //     name: 'Languages',
        //     link: './'
        // }
    ]

    // Exactly 4 colors
    const menubgs = [
        "#EBEDC2",
        "#DFCEED",
        "#EDD1C2",
        "#C2EDEA"
    ]

    return (
        <>
            <div className={styles.container}>
                <Image src={logo} height={115} width={150}></Image>
                <div className={`${styles.menuBurger}`} onClick={() => setVisibilityOfMenu(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {menubgs.map((color, index) => { return(
                <div
                    key={index}
                    className={`${styles.menuSideSecondary}`}
                    style={{
                        transitionDelay: `0.${index}s`,
                        backgroundColor: color,
                        left: isMenuVisible? "0" : "100%",
                        zIndex: index+2
                    }}
                >
                </div>
            )})}
            <div
                className={`${styles.menuSideMain}`}
                style={{left: isMenuVisible? "0" : "100%"}}
            >
                <div className={`${styles.close}`} onClick={() => setVisibilityOfMenu(false)}>&#10008;</div>
                <div 
                    className={styles.items}
                    style={{transform: isMenuVisible? "scale(1)" : "scale(1.8)"}}
                >
                    {menuItems.map(({name, link}, index) => {
                        return(
                            <Link href={link} key={index}>
                                <div>
                                    <span
                                        onMouseEnter={(e) => onMouseEnterHandler(e)}
                                        onMouseLeave={(e) => onMouseLeaveHandler(e)}
                                        style={{
                                            transform: isMenuVisible? "" : "translateY(150%)",
                                            transition: `transform 0.5s ease ${0.8 + index * 0.05}s`,
                                        }}
                                    >
                                        {name}
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div
                    id="bgText"
                    className={`${styles.bgText}`}
                    style={{
                        color: isBgTextVisible? "rgba(0,0,0,0.30)" : "rgba(0,0,0,0)",
                        letterSpacing: isBgTextVisible? "10px" : "40px",
                        }}>{bgText}</div>
            </div>
        </>
    )   
}

export default Header