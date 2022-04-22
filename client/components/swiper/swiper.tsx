import styles from '/styles/swiper.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const SwiperComponent = () => {
    const links = [
        "https://i.ibb.co/2gyScK5/DSC00679.jpg",
        "https://i.ibb.co/b31CHFz/DSC00671-2.jpg",
        "https://i.ibb.co/kc2RCKb/DSC00825.jpg",
        "https://i.ibb.co/wp6vpJj/DSC00826.jpg",
        "https://i.ibb.co/LgYpngt/DSC00833.jpg"
    ]

    return (
            <Swiper
                modules={[Navigation,EffectFade]}
                navigation
                effect='slide'
                speed={800}
                slidesPerView={1}
                loop
                className={styles.sliderContainer}
            >
                {links.map(item => { return (
                    <SwiperSlide className={styles.slideContainer}>
                        <img src={item} alt="There should be an image" height='100%'/>
                    </SwiperSlide>
                )})}


            </Swiper>
    )
}

export default SwiperComponent