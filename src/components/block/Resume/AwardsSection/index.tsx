import IconTextItem from '@/components/block/Resume/TechStackSection/IconTextItem';
import { Box } from '@/components/base';
import ResumeSectionTitle from '@/components/block/Resume/ResumeSectionTitle';
import Link from 'next/link';

export default function AwardsSection() {
  return (
    <Box as={'section'} my={'8'}>
      <ResumeSectionTitle title={'🏆 Awards'} desc={'수상 및 자격증'} />
      <IconTextItem
        imageProps={{ type: 'img', alt: '자율 프로젝트 상장', src: '/assets/images/자율.png' }}
        size={150}
      >
        <Box>
          <h3>🥇SSAFY 자율 프로젝트 우수(1등) - 삼성전자</h3>
          <p>2023.05.25</p>
          <Link href={'#지피지기'}>
            <p>ZippyZiggy - ChatGPT 프롬프트 제작 및 공유 플랫폼</p>
          </Link>
        </Box>
      </IconTextItem>
      <IconTextItem
        imageProps={{ type: 'img', alt: '공통 프로젝트 상장', src: '/assets/images/공통.png' }}
        size={150}
      >
        <Box>
          <h3>🥈SSAFY 공통 프로젝트 우수(2등) - 삼성전자</h3>
          <p>2023.02.17</p>
          <Link href={'#트라이캐치'}>
            <p>Try Catch - 개발자를 위한 커뮤니티</p>
          </Link>
        </Box>
      </IconTextItem>
      <Box marginTop={'6'}>
        <h3>정보처리기사 - 한국산업인력공단</h3>
        <p>2020.12.31</p>
      </Box>
    </Box>
  );
}
