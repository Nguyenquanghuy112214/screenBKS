// Import img
import logo from '~/assets/img/BKSLOGO.png';

// Css module
import classNames from 'classnames/bind';
import styles from './_footer.module.scss';

const cx = classNames.bind(styles);
export default function MainFooter() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('img-logo')}>
        <img src={logo} alt="" />
      </div>
      <div className={cx('wrapper-2')}>
        <div className={cx('contact')}>
          <div className={cx('title')}>Liên hệ</div>
          <div className={cx('title2')}>bkt@gmail.com</div>
        </div>
        <div className={cx('contact')}>
          <div className={cx('title')}>Địa chỉ</div>
          <div className={cx('title2')}>Hà Nội</div>
        </div>
      </div>
    </div>
  );
}
