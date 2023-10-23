import { SVGIcon } from '@/components/base';

interface ArrowIconProps {
  name: 'left' | 'right' | 'leftDouble' | 'rightDouble';
}
const ArrowIcon = ({ name }: ArrowIconProps) => {
  switch (name) {
    case 'left':
      return <SVGIcon id={'left'} width={'33px'} height={'34px'} />;
    case 'right':
      return <SVGIcon id={'right'} width={'28px'} height={'28px'} />;
    case 'leftDouble':
      return <SVGIcon id={'leftDouble'} />;
    case 'rightDouble':
      return <SVGIcon id={'rightDouble'} />;
    default:
      return null;
  }
};

export default ArrowIcon;
