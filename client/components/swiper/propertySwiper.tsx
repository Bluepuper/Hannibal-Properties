import styles from '/styles/swiper.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { FC } from 'react'

const PropertySwiper: FC = (objectOfImages: any) => {

    const links = Object.values(objectOfImages)
    console.log("render from property swiper");
    
    
    return (
        <>
            <Swiper
                modules={[Navigation,EffectFade]}
                navigation
                effect='slide'
                speed={800}
                slidesPerView={1}
                loop
                className={styles.sliderContainer}
            >
                {links.map(({id, link}: any) => { return (
                    <SwiperSlide className={styles.slideContainer}>
                        <img src={link} alt="There should be an image" height='100%'/>
                    </SwiperSlide>
                )})}
            
            </Swiper>
        </>
    )
}

export default PropertySwiper