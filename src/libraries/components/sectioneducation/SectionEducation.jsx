import React from 'react';

// Css module
import classNames from 'classnames/bind';
import styles from './_SectionEducation.module.scss';
const cx = classNames.bind(styles);

export default function SectionEducation({wide, color,bg, title, subtitle,children }) {
  return (
    <div style={{borderBottom: `${wide ? '1px solid #e5e5e5' : ''}`, background: `${bg ? '#f3f3f3' : ''}`, padding: `${bg ? '100px 15px' : ''}`,backgroundColor: `${color ? '#f3f3f3' : ''}` }} className={cx('wrapper')}>
      <div  style={{fontSize: `${wide ? '2.1rem' : '3.2rem'}`,fontWeight: `${wide ? '500' : '600'}`}}>{title}</div>
      {!wide && <div className={cx('line')}></div>}
      <div  style={{width: `${wide ? '80%' : '100%'}`,lineHeight: `${wide ? '28px' : ''}`}} className={cx('subtitle')}>{subtitle}</div>
      {children}
    </div>
  );
}
