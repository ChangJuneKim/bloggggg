import { Container, ExternalLink, SVGIcon } from '@/components/base';
import { iconContainer, iconGrid, label } from '@/components/mdx/Contacts/index.css';
import { SVGIconNames } from '@/components/base/SVGIcon';
import { links } from '@/constants/links';

interface Contact {
  label: string;
  link: string;
  svgId: SVGIconNames;
}

type Contacts = Array<Contact>;

const contacts: Contacts = [
  { label: 'Github', link: links.github, svgId: 'github' },
  { label: 'Portfolio', link: links.portfolio, svgId: 'notion' },
  { label: 'kchang6869@gmail.com', link: links.email, svgId: 'email' },
];

export default function Contacts() {
  return (
    <Container className={iconGrid}>
      {contacts.map((contact, index) => {
        return (
          <ExternalLink className={iconContainer} key={contact.svgId} href={contact.link}>
            <SVGIcon id={contact.svgId} />
            <span className={label}>{contact.label}</span>
          </ExternalLink>
        );
      })}
    </Container>
  );
}
