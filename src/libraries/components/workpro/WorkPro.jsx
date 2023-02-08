// Import reactbootstrap
import { Container, Col, Row } from 'react-bootstrap';

// Css module
import classNames from 'classnames/bind';
import styles from './_WorkPro.module.scss';
const cx = classNames.bind(styles);
export default function WorkPro({mt,rotate,img}) {
  return (
    <Container fluid style = {{marginTop:`${mt?'30px':''}`,borderTop:'1px solid #ccc'}}>
      <div className={cx('wrapper')} style = {{flexDirection:`${rotate?'row-reverse':''}`}}>
        <div xxl={6} xl={6} lg={6} md={6} sm={6} xs={12} className= {cx('top')}>
          <div className={cx('title')}>WorkPro</div>
          <div className={cx('sub-title')}>
            Dòng sản phẩm màn hình ViewSonic WorkPro được thiết kế chuyên dụng để giúp nâng cao hiệu suất làm việc của người dùng.
          </div>
          <div className={cx("detail")}>
            <button>XEM DÒNG SẢN PHẨM WORKPRO {'>'}</button>
          </div>
        </div>
        <div xxl={6} xl={6} lg={6} md={6} sm={6} xs={12} className= {cx('bot')}>
            <img src={img} alt="" />
        </div>
      </div>
    </Container>
  );
}
