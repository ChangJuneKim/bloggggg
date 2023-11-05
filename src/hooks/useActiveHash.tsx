'use client';

import { useEffect, useState } from 'react';

type Slugs = Array<string>;
type Options = {
  root?: HTMLElement | null;
  rootMargin?: string;
  thresholds?: ReadonlyArray<number>;
};
export default function useActiveHash(slugs: Slugs, options: Options = {}) {
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    if (typeof window === `undefined`) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setActiveHash(entry.target.id);
          }
        });
      },
      { rootMargin: `-61px 0px -85% 0px`, threshold: 1, ...options }
    );

    const existingElements = slugs.map((id) => document.getElementById(id)).filter(Boolean);

    existingElements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      existingElements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, [options, slugs]);

  return activeHash;
}
