import React from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { Link } from 'react-router-dom';

// Import components
import Menusubhome from './MenuSubHome';

// React boostrap
import { Container, Row, Col } from 'react-bootstrap';

// Css module
import classNames from 'classnames/bind';
import styles from './_MenuSub.module.scss';
const cx = classNames.bind(styles);

function MenuSub() {
  return (
    <Container fluid className={cx('wrapper')}>
      <ul className={cx('list-item')}>
        <Row>
          {/*  */}
          {Menusubhome !== undefined &&
            Menusubhome.map((menu, index) => {
              return (
                <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={6} className={cx('item')}>
                  <Tooltip animation="fade" theme="material" title={menu.name} position="top">
                    <li>
                      <Link className={cx('link')} to="/">
                        <div className={cx('img-menu')}>
                          <img src={menu.img} alt="" />
                        </div>
                        <span className={cx('title')}>{menu.name}</span>
                      </Link>
                    </li>
                  </Tooltip>
                </Col>
              );
            })}
          {/*  */}
        </Row>
      </ul>
    </Container>
  );
}

export default MenuSub;
