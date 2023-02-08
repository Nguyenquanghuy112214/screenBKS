import React, { useState } from 'react';
// Import data
import data from '~/constants/dataeducation2';

// Import components
import SectionEducation from '~/libraries/components/sectioneducation/SectionEducation';
import Discover from '~/libraries/components/discover/Discover';
import Convert from '~/libraries/components/convert/Convert';
import VideoCenter from '~/libraries/components/videocenter/VideoCenter';
import CarouselItem from '~/libraries/components/carouselitem/CarouselItem'

// Css module
import classNames from 'classnames/bind';
import styles from './_Integration.module.scss';


const cx = classNames.bind(styles);
export default function Integration() {
  return (
    <div className={cx('wrapper')}>
      <SectionEducation title="Tích Hợp EdTech" subtitle="Thu hút học sinh, bài giảng sáng tạo và nâng cao kết quả học tập">
        <CarouselItem />
      </SectionEducation>
      <SectionEducation bg title="Khám Phá Các Sản Phẩm Cho Giáo Dục" subtitle="">
        <Discover data = {data}/>
      </SectionEducation>
      <div className={cx('line')}>
        <hr></hr>
      </div>
      <SectionEducation bg title="Chuyển đổi số trong EdTech" subtitle="Tìm hiểu thêm về ứng dụng các công nghệ ViewSonic trong giảng dạy">
        <Convert />
      </SectionEducation>
      <SectionEducation color title="Trung Tâm Video" subtitle="Xem các video hướng dẫn, chia sẻ kinh nghiệm và hơn thế nữa!">
        <VideoCenter />
      </SectionEducation>
    </div>
  );
}
