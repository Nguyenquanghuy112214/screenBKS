import React from 'react';

// Css module
import classNames from 'classnames/bind';
import styles from './_Discover.module.scss';
const cx = classNames.bind(styles);

export default function Discover({ data, wide }) {
  return (
    <div className={cx('wrapper',`${wide ? 'wrapper__wide' : ''}`)}>
      {data !== undefined &&
        data.map((item, index) => {
          return (
            <div key={index} className={cx('discover-item')}>
              <div className={cx('discover-item__img')}>
                <img src={item.img} alt="" />
              </div>
              <div className={cx('discover-item__title')}>{item.title}</div>
              <div className={cx('read-more')}>Đọc thêm {'>'} </div>
            </div>
          );
        })}
    </div>
  );
}
