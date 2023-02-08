import React from 'react';

// Import components
import Slider from '~/libraries/components/slider/Slider';
import MenuSub from '~/libraries/components/menusub/MenuSub';
import Solutions from '~/libraries/components/solutions/Solutions';
import Specifications from '~/libraries/components/specifications/Specifications';
import Practicalsolution from '~/libraries/components/practicalsolution/Practicalsolution';

// Css module
import classNames from 'classnames/bind';
import styles from './_HomePage.module.scss';
const cx = classNames.bind(styles);
export default function HomePage() {
  return (
    <div>
      <Slider />
      <MenuSub/>
      <Solutions/>
      <Specifications/>
      <Practicalsolution/>
    </div>
  );
}
