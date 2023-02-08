// Import components
import BannerEducation from '~/libraries/components/bannerducation/BannerEducation';
import Introduction from '~/libraries/components/Introduction/Introduction';

// Css module
import classNames from 'classnames/bind';
import styles from './_Enterprise.module.scss';
const cx = classNames.bind(styles);

export default function Enterprise() {
  return (
    <div>
      <BannerEducation />
      <Introduction/>
    </div>
  );
}
