import React from 'react';
// React boostrap
import { Container, Row, Col } from 'react-bootstrap';
// Import img
import anh4 from '~/assets/img/solutions/anh4.webp';

// Css module
import classNames from 'classnames/bind';
import styles from './_Practicalsolution.module.scss';
const cx = classNames.bind(styles);
function Practicalsolution() {
  return (
    <Container fluid className={cx('wrapper')}>
      <div className={cx('title')}>Giải pháp thực tế</div>
      <Row className={cx('wrapper-tottal')}>
        <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12} className={cx('list-solutions')}>
          <div className={cx('solution-item')}>
            <div
              style={{
                background:
                  'url(https://www.viewsonic.com/vsAssetFile/vn/img/resize/home/Encourage-13_w640.webp) 50% 50% / contain no-repeat',
              }}
              className={cx('solution-item__img')}
            >
              <img src={anh4} alt="" />
            </div>
            <div className={cx('wrapper-title')}>
              <div className={cx('main-title')}>Ứng dụng công nghệ vào giảng dạy tai trường đại học Mỏ Địa Chất</div>
              <div className={cx('read-more')}>
                <button className={cx('btn-read-more')}>XEM THÊM</button>
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12} className={cx('list-solutions')}>
          <div className={cx('solution-item')}>
            <div
              style={{
                background:
                  'url(https://www.viewsonic.com/vsAssetFile/vn/img/resize/home/banner_viewboard_w640.webp) 50% 50% / cover no-repeat',
              }}
              className={cx('solution-item__img')}
            >
              <img src={anh4} alt="" />
            </div>
            <div className={cx('wrapper-title')}>
              <div className={cx('main-title')}>Ứng dụng công nghệ vào giảng dạy tai trường đại học Mỏ Địa Chất</div>
              <div className={cx('read-more')}>
                <button className={cx('btn-read-more')}>XEM THÊM</button>
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12} className={cx('list-solutions')}>
          <div className={cx('solution-item')}>
            <div
              style={{
                background:
                  'url(https://www.viewsonic.com/vsAssetFile/vn/img/resize/home/Encourage-13_w640.webp) 50% 50% / contain no-repeat',
              }}
              className={cx('solution-item__img')}
            >
              <img src={anh4} alt="" />
            </div>

            <div className={cx('wrapper-title')}>
              <div className={cx('main-title')}>Ứng dụng công nghệ vào giảng dạy tai trường đại học Mỏ Địa Chất</div>
              <div className={cx('read-more')}>
                <button className={cx('btn-read-more')}>XEM THÊM</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Practicalsolution;
