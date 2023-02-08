import React from 'react';
// Import img
import anh1 from '~/assets/img/workpro/anh1.jpg';
import anh5 from '~/assets/img/trans.png';
// React boostrap
import { Container, Row, Col } from 'react-bootstrap';

// Import library
import YouTube from 'react-youtube';

// Css module
import classNames from 'classnames/bind';
import styles from './_BannerFamily.module.scss';
const cx = classNames.bind(styles);
export default function BannerEducation() {
  const opts = {
    playerVars: {
      autoplay: true,
    },
  };

  return (
    <Container fluid className={cx('wrapper')}>
      <Row className={cx('row-banner')}>
        <Col xxl={4} xl={5} lg={5} md={5} sm={5} xs={12} className={cx('content')}>
          <div className={cx('content-top')}>
            <div className={cx('content-top__sub')}>GIẢI PHÁP MÀN HÌNH MÁY TÍNH CÁ NHÂN</div>
            <div className={cx('content-top__main')}>Nhìn Để Thấy Sự Khác Biệt</div>
          </div>
          <div className={cx('content-bot')}>
            <p className={cx('content-bot__main')}>Làm việc và giải trí tại nhà theo cách của bạn.</p>
            <div className={cx('content-bot__button')}>
              <button className={cx('button')}>TẤT CẢ SẢN PHẨM</button>
            </div>
          </div>
        </Col>
        <Col xxl={8} xl={7} lg={7} md={7} sm={7} xs={12} className={cx('video')}>
          <div className={cx('wrapper-img')} style={{ background: `url(${anh1}) 50% 50% / cover no-repeat` }}>
            <img src={anh5} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
