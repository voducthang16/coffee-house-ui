import classNames from 'classnames/bind';
import styles from './Posts.module.scss';
import grid from '~/flex-grid.scss';
import Image from '../Image';
import images from '~/assets/images';
import { ArrowRightIcon } from '~/components/Icons';
const cx = classNames.bind(styles, grid);
function Posts() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container wide')}>
                <div className={cx('row')}>
                    <div className={cx('col l-4 m-6 c-12')}>
                        <div className={cx('post-wrapper')}>
                            <Image className={cx('img')} src={images._1} />
                            <h3 className={cx('title')}>
                                <span>01</span> Beautiful Place
                            </h3>
                            <p className={cx('desc')}>
                                Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei.
                                Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri
                                consequat an. Eius lorem tincidunt vix atle.
                            </p>
                            <a className={cx('link')} href="#">
                                Read More <ArrowRightIcon width={16} height={16} className={cx('icon')} />
                            </a>
                        </div>
                    </div>
                    <div className={cx('col l-4 m-6 c-12')}>
                        <div className={cx('post-wrapper')}>
                            <Image className={cx('img')} src={images._2} />
                            <h3 className={cx('title')}>
                                <span>02</span> FEEL THE COFFEE
                            </h3>
                            <p className={cx('desc')}>
                                Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei.
                                Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri
                                consequat an. Eius lorem tincidunt vix atle.
                            </p>
                            <a className={cx('link')} href="#">
                                Read More <ArrowRightIcon width={16} height={16} className={cx('icon')} />
                            </a>
                        </div>
                    </div>
                    <div className={cx('col l-4 m-6 c-12')}>
                        <div className={cx('post-wrapper')}>
                            <Image className={cx('img')} src={images._3} />
                            <h3 className={cx('title')}>
                                <span>03</span> FULL TASTE
                            </h3>
                            <p className={cx('desc')}>
                                Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei.
                                Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri
                                consequat an. Eius lorem tincidunt vix atle.
                            </p>
                            <a className={cx('link')} href="#">
                                Read More <ArrowRightIcon width={16} height={16} className={cx('icon')} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Posts;
