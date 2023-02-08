import React from 'react';

// React boostrap
import { Container, Row, Col } from 'react-bootstrap';

// Import library
import YouTube from 'react-youtube';

// Css module
import classNames from 'classnames/bind';
import styles from './_BannerEducation.module.scss';
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
            <div className={cx('content-top__sub')}>GIẢI PHÁP GIÁO DỤC VIEWSONIC</div>
            <div className={cx('content-top__main')}>35 Năm Đổi Mới và Sáng Tạo</div>
          </div>
          <div className={cx('content-bot')}>
            <p className={cx('content-bot__main')}>
              Đổi mới và sáng tạo trong giáo dục là điều mà ViewSonic Education hướng tới. Chúng tôi tự tin rằng với hệ sinh thái toàn diện
              bao gồm các thiết bị trình chiếu và phần mềm myViewBoard, giáo viên và học sinh sẽ vượt qua mọi khó khăn về không gian, thời
              gian để tăng khả năng giao tiếp, tương tác và nâng cao kết quả học tập.
            </p>
            <div className={cx('content-bot__button')}>
              <button className={cx('button')}>ĐẶT LỊCH TƯ VẤN SẢN PHẨM</button>
            </div>
          </div>
        </Col>
        <Col xxl={8} xl={7} lg={7} md={7} sm={7} xs={12} className={cx('video')}>
          <YouTube className={cx('iframe')} videoId="S4kHc8ibC1g" opts={opts} />
        </Col>
      </Row>
    </Container>
  );
}
