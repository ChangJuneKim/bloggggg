import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeHighlight from 'rehype-highlight';
import { Pluggable } from 'unified';
import rehypeExternalLinks from 'rehype-external-links';
import { visit } from 'unist-util-visit';
import readingTime from 'reading-time';

const Tag = defineNestedType(() => ({
  name: 'Tag',
  fields: {
    title: { type: 'string' },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: Tag,
    },
    createdAt: {
      type: 'date',
      required: true,
    },
    updatedAt: {
      type: 'date',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => {
        const readingTimeObj = readingTime(doc.body.raw);
        return {
          ...readingTimeObj,
          _readingTime:
            Math.round(readingTimeObj.minutes) === 0
              ? '1분 미만'
              : `읽는 시간 ${Math.round(readingTimeObj.minutes)}분`,
        };
      },
    },
  },
}));

const rehypeOptions = {
  theme: {
    dark: 'dracula',
    light: 'min-light',
  },
};

const rehypeExternalLinksOptions = {
  target: ['_blank'],
  rel: ['noreferrer noopener'],
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;

            if (codeEl.tagName !== 'code') return;

            node.raw = codeEl.children?.[0].value;
          }
        });
      },
      [rehypePrettyCode, rehypeOptions],
      [rehypeExternalLinks, rehypeExternalLinksOptions],
      rehypeSlug,
      rehypeAccessibleEmojis,
      rehypeHighlight as Pluggable,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'div') {
            if (!('data-rehype-pretty-code-fragment' in node.properties)) {
              return;
            }

            for (const child of node.children) {
              if (child.tagName === 'pre') {
                child.properties['raw'] = node.raw;
              }
            }
          }
        });
      },
    ],
  },
});
