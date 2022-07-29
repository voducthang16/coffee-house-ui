import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import grid from '~/flex-grid.scss';
import Image from '../Image';
import images from '~/assets/images';
import { CartIcon } from '~/components/Icons';
const cx = classNames.bind(styles, grid);

function Products() {
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
                    <div className={cx('col l-3')}>
                        <div className={cx('item')}>
                            <div className={cx('atc-wrapper')}>
                                <Image src={images.product_1} className={cx('img')} />
                                <div className={cx('atc')}>
                                    <CartIcon width={16} height={16} className={cx('icon')} /> <span>add to cart</span>
                                </div>
                            </div>
                            <div>
                                <h3>PAPER POUCH</h3>
                                <h4>$46.00</h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col l-3')}>
                        <div className={cx('item')}>
                            <div className={cx('atc-wrapper')}>
                                <Image src={images.product_1} className={cx('img')} />
                                <div className={cx('atc')}>
                                    <CartIcon width={16} height={16} className={cx('icon')} /> <span>add to cart</span>
                                </div>
                            </div>
                            <div>
                                <h3>PAPER POUCH</h3>
                                <h4>$46.00</h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col l-3')}>
                        <div className={cx('item')}>
                            <div className={cx('atc-wrapper')}>
                                <Image src={images.product_1} className={cx('img')} />
                                <div className={cx('atc')}>
                                    <CartIcon width={16} height={16} className={cx('icon')} /> <span>add to cart</span>
                                </div>
                            </div>
                            <div>
                                <h3>PAPER POUCH</h3>
                                <h4>$46.00</h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col l-3')}>
                        <div className={cx('item')}>
                            <div className={cx('atc-wrapper')}>
                                <Image src={images.product_1} className={cx('img')} />
                                <div className={cx('atc')}>
                                    <CartIcon width={16} height={16} className={cx('icon')} /> <span>add to cart</span>
                                </div>
                            </div>
                            <div>
                                <h3>PAPER POUCH</h3>
                                <h4>$46.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;
