import Alert from '@/components/mdx/Alert';
import Image from '@/components/mdx/Image';
import { Button, ExternalLink } from '@/components/base';
import headings from '@/components/mdx/Headings';
import Pre from '@/components/mdx/Pre';
import Contacts from '@/components/mdx/Contacts';

export const components = {
  Alert,
  Image,
  Button,
  ExternalLink,
  Contacts,
  pre: Pre,
  ...(headings as any),
};
