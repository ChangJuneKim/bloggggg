import { Box, Container, ExternalLink, SVGIcon } from '@/components/base';
import { iconContainer, iconGrid, label } from '@/components/mdx/Contacts/index.css';
import { SVGIconNames } from '@/components/base/SVGIcon';
import siteConfig from '@/site.config';

interface Contact {
  label: string;
  link: string;
  svgId: SVGIconNames;
}

type Contacts = Array<Contact>;

const contacts: Contacts = [
  { label: 'Github', link: siteConfig.links.github, svgId: 'github' },
  { label: 'Portfolio', link: siteConfig.links.portfolio, svgId: 'notion' },
  { label: 'kchang6869@gmail.com', link: siteConfig.links.email, svgId: 'email' },
];

export default function Contacts() {
  return (
    <Container className={iconGrid}>
      {contacts.map((contact, index) => {
        return (
          <ExternalLink className={iconContainer} key={contact.svgId} href={contact.link}>
            <SVGIcon id={contact.svgId} />
            <Box as="span" className={label}>
              {contact.label}
            </Box>
          </ExternalLink>
        );
      })}
    </Container>
  );
}
