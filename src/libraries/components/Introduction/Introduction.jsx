import React from 'react';

// Import img
import anh1 from '~/assets/img/workpro/anh1.jpg';
import anh2 from '~/assets/img/workpro/anh2.jpg';
import anh3 from '~/assets/img/workpro/anh3.jpg';

// Import data
import data from '~/constants/dataenterprise';
import data2 from '~/constants/datashould';
// Import components
import SectionEducation from '~/libraries/components/sectioneducation/SectionEducation';
import Discover from '~/libraries/components/discover/Discover';
import WorkPro from '~/libraries/components/workpro/WorkPro';
import Solutions2 from '~/libraries/components/solutions2/Solutions2';
import Solutions3 from '~/libraries/components/solutions3/Solutions3';

// Css module
import classNames from 'classnames/bind';
import styles from './_Introduction.module.scss';
const cx = classNames.bind(styles);

export default function Introduction() {
  return (
    <div>
      <SectionEducation wide title="Sản phẩm nổi bật">
        <Discover wide data={data} />
      </SectionEducation>
      <SectionEducation
        wide
        title="Giải Pháp Cho Văn Phòng Chuyên Nghiệp"
        subtitle="Các giải pháp trình chiếu của ViewSonic giúp giải quyết các yêu cầu trình chiếu trong mọi không gian và nâng cao khả năng giao tiếp."
      >
        <WorkPro img={anh1} mt />
        <WorkPro img={anh2} rotate />
        <WorkPro img={anh3} />
      </SectionEducation>

      <SectionEducation wide title="Giải Pháp Không Gian Làm Việc ViewSonic">
        <Solutions2 />
      </SectionEducation>

      <SectionEducation wide title="Thông tin chi tiết">
        <Solutions3 />
      </SectionEducation>

      <SectionEducation wide title="Sản phẩm khuyên dùng">
        <Discover data={data2} />
      </SectionEducation>
    </div>
  );
}
