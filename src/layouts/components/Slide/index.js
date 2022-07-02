import React from 'react';
import Slider from 'react-slick';
import image from '~/assets/images';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slide.module.scss';
import classNames from 'classnames/bind';
import grid from '~/flex-grid.scss';

const cx = classNames.bind(styles, grid);

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
}

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

function CustomSlideElement({ src, ...props }) {
    console.log(src);
    return <div style={{ backgroundImage: `url(${src})` }} className={cx('slider-image')}></div>;
}

function Slide() {
    const settings = {
        dots: true,
        lazyLoad: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('slider-wrapper')}>
            <Slider {...settings}>
                {configSlider.map((slide, index) => (
                    <CustomSlideElement key={index} src={slide.src} />
                ))}
                <div className={cx('test')}>
                    <video autoPlay loop muted>
                        <source src={image.video} type="video/mp4"></source>
                    </video>
                </div>
            </Slider>
        </div>
    );
}
export default Slide;
