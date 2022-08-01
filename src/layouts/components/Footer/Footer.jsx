import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import grid from '~/flex-grid.scss';
const cx = classNames.bind(styles, grid);

function Footer() {
    return (
        <footer>
            <section className={cx('wrapper')}>
                <div className={cx('container wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-3 m-6 c-12')}>
                            <div>
                                <h3 className={cx('title')}>OPENING HOURS</h3>
                                <ul className={cx('hours-list')}>
                                    <li>
                                        <h5>MONDAY</h5>
                                        <h6>9:00 - 22:00</h6>
                                    </li>
                                    <li>
                                        <h5>TUESDAY</h5>
                                        <h6>9:00 - 22:00</h6>
                                    </li>
                                    <li>
                                        <h5>WEDNESDAY</h5>
                                        <h6>9:00 - 22:00</h6>
                                    </li>
                                    <li>
                                        <h5>THURSDAY</h5>
                                        <h6>9:00 - 22:00</h6>
                                    </li>
                                    <li>
                                        <h5>FRIDAY</h5>
                                        <h6>9:00 - 22:00</h6>
                                    </li>
                                    <li>
                                        <h5>SATURDAY</h5>
                                        <h6>9:00 - 22:00</h6>
                                    </li>
                                    <li>
                                        <h5>SUNDAY</h5>
                                        <h6>9:00 - 22:00</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('col l-3 m-6 c-12')}>
                            <div>
                                <h3 className={cx('title')}>LATEST POSTS</h3>
                                <ul className={cx('post-list')}>
                                    <li>
                                        <a href="/">EXPAND YOUR MIND, CHANGE EVERYTHING</a>
                                        <h6>01.08.2022</h6>
                                    </li>
                                    <li>
                                        <a href="/">EXPAND YOUR MIND, CHANGE EVERYTHING</a>
                                        <h6>01.08.2022</h6>
                                    </li>
                                    <li>
                                        <a href="/">EXPAND YOUR MIND, CHANGE EVERYTHING</a>
                                        <h6>01.08.2022</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('col l-3 m-6 c-12')}>
                            <h3 className={cx('title')}>CONTACT US</h3>
                            <div className={cx('contact-list')}>
                                <a className={cx('mail')} href="mailto:contact@voducthang.com">
                                    contact@voducthang.com
                                </a>
                                <h5 className={cx('phone')}>0123456789</h5>
                                <h5 className={cx('address')}>
                                    702 Xa Lo Ha Noi, Hiep Phu, Thanh pho Thu Duc, Thanh pho Ho Chi Minh
                                </h5>
                            </div>
                        </div>
                        <div className={cx('col l-3 m-6 c-12')}>
                            <h3 className={cx('title')}>OTHER LOCATIONS</h3>
                            <div>
                                <ul className={cx('location-list')}>
                                    <li>
                                        <h5>BARISTA COFFEE SHOP</h5>
                                        <h6>Phan Van Tri, Phu Nhuan</h6>
                                    </li>
                                    <li>
                                        <h5>BARISTA CAFE</h5>
                                        <h6>Cach Mang Thang 8, Quan 10</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('bottom')}>
                <div className={cx('container wide')}>
                    <div className={cx('list-bottom')}>
                        <h6>Vo Duc Thang 2022 All Rights Reserved</h6>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
