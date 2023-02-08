import React from 'react';

// Import react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// Import components

import BannerFamily from '~/libraries/components/bannerfamily/BannerFamily';
import SectionEducation from '~/libraries/components/sectioneducation/SectionEducation';
import Solutions4 from '~/libraries/components/solutions4/Solutions4';

// Css module
import classNames from 'classnames/bind';
import styles from './_FamilyPage.module.scss';
const cx = classNames.bind(styles);

function FamilyPage() {
  return (
    <div>
      <BannerFamily />
      <SectionEducation wide title="Sản phẩm nổi bật" subtitle="Làm việc và giải trí tại nhà cùng các sản phẩm trình chiếu của ViewSonic">
        <Solutions4 />
      </SectionEducation>
      <Notfound />
    </div>
  );
}

export default FamilyPage;

export const Notfound = () => {
  return (
    <div
      className={cx('wrapper')}
      style={{ background: `url(https://color.viewsonic.com/products/images/vp3268-4k-img.jpg) 50% 68% /cover` }}
    >
      <div className={cx('pt', 'pb')}>
        <Container>
          <Row>
            <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12}>
              <div className={cx('title')}>Không tìm thấy sản phẩm phù hợp</div>
              <div className={cx('button')}>
                <button>DANH SÁCH SẢN PHẨM</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
