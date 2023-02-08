import React from 'react';
import { useNavigate } from 'react-router-dom';
import configRoutes from '~/routing/configRouting';
// Import img
import anh4 from '~/assets/img/solutions/anh4.webp';

// React boostrap
import { Container, Row, Col } from 'react-bootstrap';

// Css module
import classNames from 'classnames/bind';
import styles from './_Solutions.module.scss';
const cx = classNames.bind(styles);

function Solutions() {
  const navigation = useNavigate()
  const handleClick = () => {
    navigation(configRoutes[1].path)
  }
  const handleClick2 = () => {
    navigation(configRoutes[2].path)
  }
  const handleClick3 = () => {
    navigation(configRoutes[3].path)
  }
  return (
    <Container fluid className={cx('wrapper')}>
      <div className={cx('title')}>Giải pháp cho Học tập, làm việc và vui chơi</div>
      <Row className={cx('wrapper-tottal')}>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} className={cx('list-solutions')}>
          <div onClick={handleClick} className={cx('solution-item')}>
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
          <div onClick={handleClick2} className={cx('solution-item')}>
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
          <div onClick={handleClick3} className={cx('solution-item')}>
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

export default Solutions;
