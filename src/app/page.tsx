import { SkipNavContent } from '@/components/a11y';
import Contacts from '@/components/mdx/Contacts';
import Hero from '@/components/block/Hero';
import { Introduce } from '@/components/block';
import LatestPosts from '@/components/block/LatestPosts';
import Divider from '@/components/extended/Divider';

export default function Home() {
  return (
    <>
      <Hero />
      <SkipNavContent variant={'hero'}>
        <Introduce />
        <Contacts />
        <Divider />
        <LatestPosts />
      </SkipNavContent>
    </>
  );
}
