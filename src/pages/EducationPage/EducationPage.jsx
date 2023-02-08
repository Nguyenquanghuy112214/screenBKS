import React from 'react';

// Import componnents
import BannerEducation from '~/libraries/components/bannerducation/BannerEducation';
import Integration from '~/libraries/components/Integration/Integration';

// Css module
import classNames from 'classnames/bind';
import styles from './_EducationPage.module.scss';
const cx = classNames.bind(styles);

export default function EducationPage() {
  return (
    <div className={cx('wrapper')}>
      <BannerEducation />
      <Integration />
    </div>
  );
}
