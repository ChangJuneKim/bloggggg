import { Box, ExternalLink, SVGIcon } from '@/components/base';
import { ReactNode } from 'react';
import {
  projectLeftFlexBasis,
  projectRightFlexBasis,
  projectTitle,
} from '@/components/block/Resume/ProjectsSection/ProjectItem/index.css';
import Alert from '@/components/mdx/Alert';
import IconTextItem, { ImageProps } from '@/components/block/Resume/TechStackSection/IconTextItem';
import Link from 'next/link';

interface FlexBoxProps {
  marginTop?: string;
  marginBottom?: string;
  leftContent: ReactNode;
  rightContent: ReactNode;
}

const FlexBox = ({ leftContent, rightContent, marginTop, marginBottom }: FlexBoxProps) => (
  <Box
    display={'flex'}
    justifyContent={'space-between'}
    __marginTop={marginTop}
    __marginBottom={marginBottom}
  >
    <Box className={projectLeftFlexBasis}>{leftContent}</Box>
    <Box className={projectRightFlexBasis}>{rightContent}</Box>
  </Box>
);

export type ProjectResult = {
  title: string;
  href: string;
  type: 'github' | 'link';
};
interface ProjectItem {
  imageProps: ImageProps;
  title: string;
  projectLink: string;
  members: string;
  position: string;
  period: string;
  techStacks: Array<string>;
  description: ReactNode;
  projectResults: Array<ProjectResult>;
  implementations: Array<string>;
}
export default function ProjectItem({
  imageProps,
  title,
  projectLink,
  members,
  position,
  period,
  techStacks,
  description,
  projectResults,
  implementations,
}: ProjectItem) {
  return (
    <IconTextItem imageProps={imageProps}>
      <FlexBox
        leftContent={
          title === '개인 블로그' ? (
            <Link href={projectLink}>
              <h3 id={title} className={projectTitle} style={{ scrollMarginTop: '70px' }}>
                {title}
              </h3>
            </Link>
          ) : (
            <ExternalLink href={projectLink}>
              <h3 id={title} className={projectTitle} style={{ scrollMarginTop: '70px' }}>
                {title}
              </h3>
            </ExternalLink>
          )
        }
        rightContent={
          <Box as={'p'} textAlign={'right'}>
            {members}
          </Box>
        }
      />
      <FlexBox
        marginTop={'0.5rem'}
        leftContent={<p>{position}</p>}
        rightContent={
          <Box as={'p'} textAlign={'right'}>
            {period}
          </Box>
        }
      />
      <Box marginTop={'4'}>
        {techStacks.map((techStack) => (
          <Box
            as={'span'}
            display={'inline-block'}
            marginBottom={'1'}
            px={'2'}
            py={'1'}
            marginRight={'2'}
            borderRadius={'md'}
            background={'mutedAsBg'}
            color={'primary'}
            key={`${techStack}`}
          >
            {techStack}
          </Box>
        ))}
      </Box>
      <Alert>{description}</Alert>
      <FlexBox
        marginTop={'0.5rem'}
        marginBottom={'2rem'}
        leftContent={<p>프로젝트 결과물</p>}
        rightContent={
          <Box as={'ul'} display={'flex'} flexDirection={'column'} textAlign={'right'}>
            {projectResults.map((result) => {
              const { type, href, title } = result;
              return type === 'github' ? (
                <Box as={'li'} marginBottom={'1'} key={title}>
                  <ExternalLink href={href} key={title}>
                    <Box
                      as={'span'}
                      display={'inline-block'}
                      style={{ translate: '0 -1px' }}
                      marginRight={'1'}
                    >
                      <SVGIcon id={'github'} width={'1em'} height={'1em'} />
                    </Box>
                    {result.title}
                  </ExternalLink>
                </Box>
              ) : (
                <Box as={'li'} marginBottom={'1'} key={title}>
                  <ExternalLink href={href} key={title}>
                    <Box
                      as={'span'}
                      display={'inline-block'}
                      style={{ translate: '0 -1px' }}
                      marginRight={'1'}
                    >
                      <SVGIcon id={'share'} width={'1em'} height={'1em'} />
                    </Box>
                    {result.title}
                  </ExternalLink>
                </Box>
              );
            })}
          </Box>
        }
      />
      <FlexBox
        marginTop={'1.5rem'}
        leftContent={<p>구현 기능</p>}
        rightContent={
          <Box as="ul" display={'flex'} flexDirection={'column'}>
            {implementations.map((imple, index) => (
              <li key={index}>
                <p>{imple}</p>
              </li>
            ))}
          </Box>
        }
      />
    </IconTextItem>
  );
}
