import React from 'react';

// Import assets
import slider1 from '~/assets/img/slider1.jpg';

// React boostrap
import { Container, Row, Col } from 'react-bootstrap';

// Css module
import classNames from 'classnames/bind';
import styles from './_Slider.module.scss';
const cx = classNames.bind(styles);

function Slider1() {
  return (
    <Container fluid className={cx('wrapper-slider','active-slider')}>
      <Row style={{height:'100%'}} className="reverse-flex">
        <Col xxl={4} xl={3} lg={3} md={4} sm={12} xs={12} className={cx('wrapper-slider__left','wrapper-slider__left-active')}>
          <div className={cx('slider-text','slider-text-active')}>
            <div className={cx('slider-text__main','slider-text__main-active')}>X2000L-4k</div>
            <div className={cx('slider-text__sub','slider-text__sub-active')}>Máy chiếu giải trí Laser siêu gần của năm 2022</div>
          </div>
          <div className={cx('slider-button')}>
            <button>Xem thêm</button>
          </div>
        </Col>
        <Col gx={0} xxl={8} xl={9} lg={9} md={8} sm={12} xs={12} className={cx('wrapper-slider__right','wrapper-slider__right-active')}>
          <div className={cx('img-slider1','img-slider1-active')}>
            <img className={cx('img','img-active')} src={slider1} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Slider1;
