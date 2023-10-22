import Alert from '@/components/mdx/Alert';
import Image from '@/components/mdx/Image';
import { Button } from '@/components/base';
import headings from '@/components/mdx/Headings';

export const components = {
  Alert,
  Image,
  Button,
  ...(headings as any),
};
