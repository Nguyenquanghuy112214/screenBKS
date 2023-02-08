import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// React boostrap
import { Container, Row, Col } from 'react-bootstrap';

// React-icon
import { FiMessageSquare } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import { IoIosSearch } from 'react-icons/io';

import { Link } from 'react-router-dom';

// Import Components
import MenuMb from '~/libraries/components/menumb/MenuMb';
import ListMenu from '~/constants/menu';

// Import from assets
import logo from '~/assets/img/BKSLOGO.png';

// Css module
import classNames from 'classnames/bind';
import styles from './_headermain.module.scss';
const cx = classNames.bind(styles);

export default function HeaderMain() {
  const navigate = useNavigate()
  const [activeMenuMb, setActiveMenuMb] = useState(false);
  // open menu mobile
  const openMenuMb = () => {
    setActiveMenuMb(true);
  };

  // close menu mobile
  const closeMenuMb = () => {
    setActiveMenuMb(false);
  };

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className={cx('wrapper')}>
      {/* Menu Mobile */}
      <div onClick={closeMenuMb} className={`overlay-modal ${activeMenuMb ? 'active_overlay' : ''}`}></div>
      <MenuMb onClick={closeMenuMb} active={activeMenuMb} />
      {/* Menu Mobile */}
      <Container fluid style={{ height: '100%' }}>
        <Row className={cx('row-header')}>
          <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10} className={cx('header-left')}>
            <div onClick={handleClick} className={cx('logo')}>
              <img className={cx('img-logo')} src={logo} alt="" />
            </div>
            <div className={cx('wrapper-menu')}>
              <ul className={cx('ul')}>
                <li className={cx('li')}>
                  {ListMenu !== undefined &&
                    ListMenu.map((menu, index) => {
                      return (
                        <Link key={index} to={menu.path}>
                          {menu.name}
                        </Link>
                      );
                    })}
                </li>
              </ul>
            </div>
          </Col>
          <Col xxl={2} xl={2} lg={2} md={2} sm={0} className={cx('header-right')}>
            <div className={cx('search')}>
              <IoIosSearch />
            </div>
            <div className={cx('contact')}>
              <span className={cx('text-contact')}>Liên hệ</span>
              <span className={cx('img-contact')}>
                <FiMessageSquare />
              </span>
            </div>
          </Col>
          <Col xxl={0} xl={0} lg={0} md={0} sm={0} className={cx('header-right__mb')}>
            <div onClick={openMenuMb}>
              <FiMenu />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
