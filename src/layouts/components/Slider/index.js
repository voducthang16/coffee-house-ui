import classNames from 'classnames/bind';
import grid from '~/flex-grid.scss';
import image from '~/assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './Slider.module.scss';
import './Slider.scss';
const cx = classNames.bind(styles, grid);

const configSlider = [
    {
        type: 'image',
        src: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider.jpg',
    },
    {
        type: 'image',
        src: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider-img-2.jpg',
    },
    {
        type: 'image',
        src: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider-4.jpg',
    },
];

function Slider() {
    return (
        <div className={cx('wrapper')}>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className={cx('slider-image')}
                        style={{
                            backgroundImage: `url(https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider-img-2.jpg)`,
                        }}
                    ></div>
                </SwiperSlide>
                <SwiperSlide style={{ height: '100vh' }}>
                    <video className={cx('video')} autoPlay loop muted>
                        <source src={image.video} type="video/mp4"></source>
                    </video>
                </SwiperSlide>
                <SwiperSlide style={{ height: '100vh' }}>
                    <div
                        className={cx('slider-image')}
                        style={{
                            backgroundImage: `url(https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider.jpg)`,
                        }}
                    ></div>
                </SwiperSlide>
                <SwiperSlide style={{ height: '100vh' }}>
                    <div
                        className={cx('slider-image')}
                        style={{
                            backgroundImage: `url(https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider-4.jpg)`,
                        }}
                    ></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
