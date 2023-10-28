import Alert from '@/components/mdx/Alert';
import Image from '@/components/mdx/Image';
import { Box, Button, ExternalLink } from '@/components/base';
import headings from '@/components/mdx/Headings';
import Pre from '@/components/mdx/Pre';
import Contacts from '@/components/mdx/Contacts';
import Collapsible from '@/components/mdx/Collapsible';
import Divider from '@/components/extended/Divider';
import Thumbnail from '@/components/mdx/Thumbnail';

export const components = {
  Alert,
  Image,
  Button,
  ExternalLink,
  Contacts,
  Collapsible,
  Divider,
  Thumbnail,
  Box,
  pre: Pre,
  ...(headings as any),
};
