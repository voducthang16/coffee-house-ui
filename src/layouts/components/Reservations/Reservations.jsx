import classNames from 'classnames/bind';
import styles from './Reservations.module.scss';
import grid from '~/flex-grid.scss';
import { UsersIcon, CalendarIcon, TimeIcon } from '~/components/Icons';
const cx = classNames.bind(styles, grid);
function Reservations() {
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
                <div className={cx('flex-wrapper')}>
                    <div className={cx('select-wrapper')}>
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                        <UsersIcon width={24} height={24} className={cx('icon-in-select')} />
                    </div>
                    <h6 className={cx('text')}>For</h6>
                    <div className={cx('select-wrapper')}>
                        <select name="" id="">
                            <option value="">01/08/2022</option>
                            <option value="">02/08/2022</option>
                            <option value="">03/08/2022</option>
                        </select>
                        <CalendarIcon width={24} height={24} className={cx('icon-in-select')} />
                    </div>
                    <h6 className={cx('text')}>At</h6>
                    <div className={cx('select-wrapper')}>
                        <select name="" id="">
                            <option value="">7:00 am</option>
                            <option value="">8:00 am</option>
                            <option value="">9:00 am</option>
                        </select>
                        <TimeIcon width={24} height={24} className={cx('icon-in-select')} />
                    </div>
                    <button className={cx('btn')}>BOOK A TABLE</button>
                </div>
            </div>
        </section>
    );
}

export default Reservations;
