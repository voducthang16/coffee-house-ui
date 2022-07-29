import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import grid from '~/flex-grid.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
const cx = classNames.bind(styles, grid);

function Menu() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container wide')}>
                <div className={cx('quotes')}>
                    <p>What Happens Here</p>
                    <h3>COFFEE BUILD YOUR BASE.</h3>
                    <div className={cx('separate')}>
                        <span></span>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col l-6')}>
                        <div className={cx('item')}>
                            <div className={cx('item-img-wrapper')}>
                                <Image src={images.coffee} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('item-title')}>
                                    <h4>COFFEE MOCHA</h4>
                                    <div className={cx('item-separate')}></div>
                                    <h4>$2.95</h4>
                                </div>
                                <p>Fresh brewed coffee and steamed milk</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img-wrapper')}>
                                <Image src={images.coffee} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('item-title')}>
                                    <h4>COFFEE MOCHA</h4>
                                    <div className={cx('item-separate')}></div>
                                    <h4>$2.95</h4>
                                </div>
                                <p>Fresh brewed coffee and steamed milk</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img-wrapper')}>
                                <Image src={images.coffee} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('item-title')}>
                                    <h4>COFFEE MOCHA</h4>
                                    <div className={cx('item-separate')}></div>
                                    <h4>$2.95</h4>
                                </div>
                                <p>Fresh brewed coffee and steamed milk</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img-wrapper')}>
                                <Image src={images.coffee} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('item-title')}>
                                    <h4>COFFEE MOCHA</h4>
                                    <div className={cx('item-separate')}></div>
                                    <h4>$2.95</h4>
                                </div>
                                <p>Fresh brewed coffee and steamed milk</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img-wrapper')}>
                                <Image src={images.coffee} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('item-title')}>
                                    <h4>COFFEE MOCHA</h4>
                                    <div className={cx('item-separate')}></div>
                                    <h4>$2.95</h4>
                                </div>
                                <p>Fresh brewed coffee and steamed milk</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img-wrapper')}>
                                <Image src={images.coffee} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('item-title')}>
                                    <h4>COFFEE MOCHA</h4>
                                    <div className={cx('item-separate')}></div>
                                    <h4>$2.95</h4>
                                </div>
                                <p>Fresh brewed coffee and steamed milk</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col l-6')}>
                        <div className={cx('item')}>
                            <div className={cx('item-img-wrapper')}>
                                <Image src={images.coffee} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('item-title')}>
                                    <h4>ICED GINGERBREAD LATTE</h4>
                                    <div className={cx('item-separate')}></div>
                                    <h4>$2.95</h4>
                                </div>
                                <p>Fresh brewed coffee and steamed milk</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img-wrapper')}>
                                <Image src={images.coffee} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('item-title')}>
                                    <h4>ICED CAFFE MOCHA</h4>
                                    <div className={cx('item-separate')}></div>
                                    <h4>$2.95</h4>
                                </div>
                                <p>Fresh brewed coffee and steamed milk</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img-wrapper')}>
                                <Image src={images.coffee} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('item-title')}>
                                    <h4>COFFEE MOCHA</h4>
                                    <div className={cx('item-separate')}></div>
                                    <h4>$2.95</h4>
                                </div>
                                <p>Fresh brewed coffee and steamed milk</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img-wrapper')}>
                                <Image src={images.coffee} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('item-title')}>
                                    <h4>COFFEE MOCHA</h4>
                                    <div className={cx('item-separate')}></div>
                                    <h4>$2.95</h4>
                                </div>
                                <p>Fresh brewed coffee and steamed milk</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img-wrapper')}>
                                <Image src={images.coffee} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('item-title')}>
                                    <h4>COFFEE MOCHA</h4>
                                    <div className={cx('item-separate')}></div>
                                    <h4>$2.95</h4>
                                </div>
                                <p>Fresh brewed coffee and steamed milk</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img-wrapper')}>
                                <Image src={images.coffee} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('item-title')}>
                                    <h4>COFFEE MOCHA</h4>
                                    <div className={cx('item-separate')}></div>
                                    <h4>$2.95</h4>
                                </div>
                                <p>Fresh brewed coffee and steamed milk</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('btn-wrapper')}>
                    <a href="#">VIEW MENU</a>
                </div>
            </div>
        </section>
    );
}

export default Menu;
