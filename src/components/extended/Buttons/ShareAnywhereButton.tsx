'use client';

import Button from '@/components/base/Button';
import { SVGIcon } from '@/components/base/SVGIcon';
import { VariantNames } from '@/components/base/Button/index.css';

interface ShareAnywhereButtonProps {
  link: string;
  message: string;
  variant?: VariantNames;
}

export default function ShareAnywhereButton({
  link,
  message,
  variant = `primary`,
}: ShareAnywhereButtonProps) {
  const handleSocialShare = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    navigator
      .share({
        title: message,
        text: `${message} by 김창준`,
        url: link,
      })
      .then(() => console.log(`Successful share of ${link}`))
      .catch((error) => console.log(`Error sharing ${link}`, error));
  };

  return (
    <Button
      buttonType="button"
      onClick={handleSocialShare}
      size="md"
      variant={variant}
      rightIcon={<SVGIcon id="share" height="1em" width="1em" />}
    >
      공유하기
    </Button>
  );
}
