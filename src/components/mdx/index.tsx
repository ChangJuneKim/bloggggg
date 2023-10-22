import Alert from '@/components/mdx/Alert';
import Image from '@/components/mdx/Image';
import { Button, ExternalLink } from '@/components/base';
import headings from '@/components/mdx/Headings';

export const components = {
  Alert,
  Image,
  Button,
  ExternalLink,
  ...(headings as any),
};
