import IconTextItem from '@/components/block/Resume/TechStackSection/IconTextItem';
import { Box } from '@/components/base';
import ResumeSectionTitle from '@/components/block/Resume/ResumeSectionTitle';

export default function EducationSection() {
  return (
    <Box as={'section'} marginTop={'8'}>
      <ResumeSectionTitle title={'🎓 Educations'} desc={'교육'} />
      <IconTextItem
        imageProps={{ type: 'img', alt: 'ssafy', src: '/assets/images/ssafy.png' }}
        size={136}
      >
        <Box>
          <h3>삼성 청년 소프트웨어 아카데미 8기 수료</h3>
          <p>2022.07.06 ~ 2023.06.30</p>
        </Box>
      </IconTextItem>
      <IconTextItem
        imageProps={{ type: 'img', alt: '인제대학교', src: '/assets/images/inje.jpg' }}
        size={136}
      >
        <Box>
          <h3>인제대학교 컴퓨터공학과 졸업</h3>
          <p>2013.03.04 ~ 2020.02.14</p>
        </Box>
      </IconTextItem>
    </Box>
  );
}
