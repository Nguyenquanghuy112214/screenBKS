import React from 'react';
import { Link } from 'react-router-dom';

// Import icon
import { IoMdClose, IoIosSearch } from 'react-icons/io';

// Import component
import ListMenu from '~/constants/menu';

// Css module
import classNames from 'classnames/bind';
import styles from './_MenuMb.module.scss';
const cx = classNames.bind(styles);

export default function MenuMb({ active, onClick }) {
  return (
    <div className={cx('wrapper', `${active ? 'active-menumb' : ''}`)}>
      <div onClick={() => onClick()} className={cx('close')}>
        <IoMdClose />
      </div>
      {/* Search */}
      <div className={cx('wrapper-search')}>
        <span className={cx('icon-search')}>
          <IoIosSearch />
        </span>
        <input className={cx('input-search')} type="text" placeholder="Tìm kiếm" />
      </div>
      {/* Menu */}
      <div className={cx('wrapper-menu')}>
        <ul>
          <li>
            {ListMenu !== undefined &&
              ListMenu.map((menu, index) => {
                return (
                  <Link key={index} to={menu.path}>
                    {menu.name}
                  </Link>
                );
              })}
          </li>
        </ul>
      </div>
    </div>
  );
}
