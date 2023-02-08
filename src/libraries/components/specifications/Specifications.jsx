import React from 'react';
// Import img
import imgleft from '~/assets/img/specfications/left.png';
import imgright from '~/assets/img/specfications/right.png';
// Css module
import classNames from 'classnames/bind';
import styles from './_Specifications.module.scss';
const cx = classNames.bind(styles);
function Specifications() {
  return (
    <div className={cx('wrapper')}>
      
      <div className={cx('header')}>
      <img className={cx('img-left')} src={imgleft} alt="" />
      <img className={cx('img-right')} src={imgright} alt="" />
        <span className={cx('header-title')}>Thông số kỹ thuật</span>
      </div>
    </div>
  );
}

export default Specifications;
