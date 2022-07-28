import classNames from 'classnames/bind';
import grid from '~/flex-grid.scss';
import image from '~/assets/images';
import Image from '../Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper';
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
        background: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider.jpg',
        logo: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/home-1-slider-img.png',
        title: 'important of coffee',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque',
    },
    {
        type: 'image',
        background: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider-img-2.jpg',
        logo: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/home-1-slider-img-3.png',
        title: 'the home of coffee',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque',
    },
    {
        type: 'image',
        background: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider-4.jpg',
        logo: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/home-1-slider-img-4.png',
        title: 'brewed to perfection',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque',
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
                modules={[Navigation, Pagination, EffectFade]}
                className="mySwiper"
            >
                {configSlider.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="slider-image"
                            style={{
                                backgroundImage: `url(${slide.background})`,
                            }}
                        >
                            <div className="slider-content">
                                <Image className="img-active" src={slide.logo} alt="Slider" />
                                <h3 className="slider-title title-active">{slide.title}</h3>
                                <p className="slider-desc desc-active">{slide.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperSlide style={{ height: '100vh' }}>
                    <div className="video-content">
                        <video className="video" autoPlay loop muted>
                            <source src={image.video} type="video/mp4"></source>
                        </video>
                        <div className="slider-content">
                            <Image
                                className="img-active"
                                src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/home-1-slider-img-2.png"
                                alt="Slider"
                            />
                            <h3 className="slider-title title-active">special coffee beans</h3>
                            <p className="slider-desc desc-active">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum
                                facere voluptate dicta obcaecati deserunt nobis suscipit eaque
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
