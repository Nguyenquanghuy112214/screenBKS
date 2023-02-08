import React from 'react';
import { useNavigate } from 'react-router-dom';
import configRoutes from '~/routing/configRouting';
// Import img
import anh4 from '~/assets/img/solutions/anh4.webp';

// React boostrap
import { Container, Row, Col } from 'react-bootstrap';

// Css module
import classNames from 'classnames/bind';
import styles from './_Solutions3.module.scss';
const cx = classNames.bind(styles);

function Solutions3() {
  const navigation = useNavigate()
  const handleClick = () => {
    navigation(configRoutes[1].path)
  }
  const handleClick2 = () => {
    navigation(configRoutes[2].path)
  }
  return (
    <Container fluid className={cx('wrapper')}>
      <Row className={cx('wrapper-tottal')}>
        <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12} className={cx('list-solutions')}>
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
              <div className={cx('main-title')}>Bạn nên sử dụng màn hình Ultrawide hay 2 màn hình thông thường?</div>
            </div>
            <div className={cx('wrapper-read')}>
              <span className={cx('read-more')}>Xem thêm </span>
              <span className={cx('arrow')}>{`    >`}</span>
            </div>
          </div>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12} className={cx('list-solutions')}>
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
              <div className={cx('main-title')}>Bạn nên sử dụng màn hình cong hay màn hình phẳng</div>
            </div>
             <div className={cx('wrapper-read')}>
              <span className={cx('read-more')}>Xem thêm </span>
              <span className={cx('arrow')}>{`    >`}</span>
            </div>
          </div>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={12} className={cx('list-solutions')}>
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
              <div className={cx('main-title')}>Những màn hình bảo vệ mắt tốt nhất 2021</div>
            </div>
             <div className={cx('wrapper-read')}>
              <span className={cx('read-more')}>Xem thêm </span>
              <span className={cx('arrow')}>{`    >`}</span>
            </div>
          </div>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={12} className={cx('list-solutions')}>
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
              <div className={cx('main-title')}>Tại sao bạn nên mua màn hình di động?</div>
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

export default Solutions3;
