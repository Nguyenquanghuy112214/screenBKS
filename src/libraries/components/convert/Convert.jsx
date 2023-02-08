import React from 'react';
// Import img
import anh4 from '~/assets/img/solutions/anh4.webp';

// React boostrap
import { Container, Row, Col } from 'react-bootstrap';

// Css module
import classNames from 'classnames/bind';
import styles from './_Convert.module.scss';
const cx = classNames.bind(styles);

function Convert() {
  return (
    <Container fluid className={cx('wrapper')}>
      <Row className={cx('wrapper-tottal')}>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} className={cx('list-solutions')}>
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
              <div className={cx('main-title')}>Giáo dục</div>
              <div className={cx('sub-title')}>Giải pháp giáo dục toàn diện của công ty hàng đầu trong lĩnh vực EdTech.</div>
            </div>
            <div className={cx('wrapper-read')}>
              <span className={cx('read-more')}>Xem thêm </span>
              <span className={cx('arrow')}>{`    >`}</span>
            </div>
          </div>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} className={cx('list-solutions')}>
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
              <div className={cx('main-title')}>Giáo dục</div>
              <div className={cx('sub-title')}>Giải pháp giáo dục toàn diện của công ty hàng đầu trong lĩnh vực EdTech.Giải pháp giáo dục toàn diện của công ty hàng đầu trong lĩnh vực EdTech</div>
            </div>
             <div className={cx('wrapper-read')}>
              <span className={cx('read-more')}>Xem thêm </span>
              <span className={cx('arrow')}>{`    >`}</span>
            </div>
          </div>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} className={cx('list-solutions')}>
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
              <div className={cx('main-title')}>Giáo dục</div>
              <div className={cx('sub-title')}>Giải pháp giáo dục toàn diện của công ty hàng đầu trong lĩnh vực EdTech.</div>
            </div>
             <div className={cx('wrapper-read')}>
              <span className={cx('read-more')}>Xem thêm </span>
              <span className={cx('arrow')}>{`    >`}</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Convert;
