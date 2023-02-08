import React, { useState } from 'react';
// Import data 
import dataeducation from '~/constants/dataeducation'
// Import img
import anh5 from '~/assets/img/solutions/anh5.webp';
// Imoport React-boostap
import { Container, Row, Col } from 'react-bootstrap';

// Css module
import classNames from 'classnames/bind';
import styles from '~/libraries/components/Integration/_Integration.module.scss';

const cx = classNames.bind(styles);
export default function Integration() {
  const [number, setNumber] = useState(0);

 
  const controls = [
    { id: 0, title: 'Tìm hiểu về phần mềm' },
    { id: 1, title: 'Màn hình tương tác thông minh' },
    { id: 2, title: 'Màn hình kỹ thuật số' },
  ];
  return (
    <Container fluid className={cx('wrapper-carouselitem')}>
      <Row className={cx('row-carouselitem')}>
        <Col
          xxl={7}
          xl={7}
          lg={7}
          md={7}
          sm={7}
          xs={12}
          className={cx('carousel-item__left')}
          style={{
            background: `url(${dataeducation[number].background}) 50% 50% / contain no-repeat`,
          }}
        >
          <img src={anh5} alt="" />
        </Col>
        <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className={cx('carousel-item__right')}>
          <div className={cx('carousel-item__right-top')}>
            <div className={cx('carousel-item__right-top-sub')}>{dataeducation[number].title}</div>
            <div className={cx('carousel-item__right-top-main')}>{dataeducation[number].subtitle}</div>
          </div>
          <div className={cx('carousel-item__right-bot')}>
            <div className={cx('carousel-item__right-bot-main')}>{dataeducation[number].title2}</div>
            <div className={cx('carousel-item__right-bot-button')}>
              <button className={cx('button')}>{dataeducation[number].button}</button>
            </div>
          </div>
        </Col>
        <div className={cx('controls')}>
          {controls.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setNumber(item.id);
                }}
                className={cx('controls-item', `${item.id === number ? 'active' : ''}`)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}
