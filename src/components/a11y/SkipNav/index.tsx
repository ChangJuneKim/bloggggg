import { ReactNode } from 'react';
import { mainStyle, skipNavLinkStyle } from '@/components/a11y/SkipNav/index.css';
import { FullWidthContainer } from '@/components/layout';

const defaultId = `skip-to-content`;

interface SkipNavLinkProps {
  contentId?: string;
  children?: ReactNode;
}

interface SkipNavContentProps extends SkipNavLinkProps {
  id?: string;
}

export const SkipNavLink = ({
  children = '본문으로 바로 가기',
  contentId,
  ...props
}: SkipNavLinkProps) => {
  const id = contentId || defaultId;

  return (
    <a {...props} className={skipNavLinkStyle} href={`#${id}`}>
      {children}
    </a>
  );
};

/**
 * Wrap the main content of a page with this, thus also the <main> tag
 */
export const SkipNavContent = ({ children, id: idProp, ...props }: SkipNavContentProps) => {
  const id = idProp || defaultId;

  return (
    <FullWidthContainer className={mainStyle}>
      <main {...props} id={id}>
        {children}
      </main>
    </FullWidthContainer>
  );
};
