import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import grid from '~/flex-grid.scss';
import image from '~/assets/images';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles, grid);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container wide')}>
                <div className={cx('row')}>
                    <div className={cx('col l-2')}>
                        <Link to={config.routes.home} className={cx('logo-link')}>
                            <Image className={cx('logo-img')} src={image.logo} alt="Logo Image" />
                        </Link>
                    </div>
                    <div className={cx('col l-6 l-o-4')}>
                        <nav className={cx('navbar')}>
                            <ul className={cx('navbar-list')}>
                                <li className={cx('navbar-item')}>
                                    <Link to={config.routes.home} className={cx('navbar-link')}>
                                        HOME
                                    </Link>
                                </li>
                                <li className={cx('navbar-item')}>
                                    <Link to={config.routes.about} className={cx('navbar-link')}>
                                        ABOUT
                                    </Link>
                                </li>
                                <li className={cx('navbar-item')}>
                                    <Link to={config.routes.menu} className={cx('navbar-link')}>
                                        MENU
                                    </Link>
                                </li>
                                <li className={cx('navbar-item')}>
                                    <Link to={config.routes.contact} className={cx('navbar-link')}>
                                        CONTACT
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
