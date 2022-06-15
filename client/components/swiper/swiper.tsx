import { Navigation, EffectFade, Pagination, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/parallax'
import 'swiper/css/effect-fade'
import styles from '/styles/swiper.module.scss'
import { FC } from 'react'

const SwiperComponent: FC = (estatesObject: any) => {
    const estates:any  = Object.values(estatesObject)
    return (
            <Swiper
                modules={[Navigation, EffectFade, Pagination, Parallax]}
                navigation
                pagination={{clickable: true}}
                effect='slide'
                speed={800}
                slidesPerView={1}
                parallax={true}
                loop
                className={styles.sliderContainer}
            >
                {estates.map((estate: any, index: number) => {
                    if (index > 5) {
                        return null
                    }
                    return (
                        <SwiperSlide key={index} className={styles.slideContainer}>
                            <img
                                data-swiper-parallax="600"
                                data-swiper-parallax-opacity="0.5"
                                src={estate.images[0]?.link}
                                alt="There should be an image"
                                height='100%'
                            />
                            {/* <div data-swiper-parallax={400}>{estate.name}</div>     */}
                            <div>
                                <div>
                                    <p data-swiper-parallax="400">{estate.name}</p>
                                    <p
                                        data-swiper-parallax="200"
                                        style={{fontSize: "35px"}}
                                    >
                                        €{estate.price.toLocaleString()}
                                    </p>
                                    
                                </div>
                            </div>    
                        </SwiperSlide>
                    )
                })}
                        
            </Swiper>
    )
}

export default SwiperComponent