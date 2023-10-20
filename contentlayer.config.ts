import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeHighlight from 'rehype-highlight';
import { Pluggable } from 'unified';
import rehypeExternalLinks from 'rehype-external-links';

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
      [rehypePrettyCode, rehypeOptions],
      [rehypeExternalLinks, rehypeExternalLinksOptions],
      rehypeSlug,
      rehypeAccessibleEmojis,
      rehypeHighlight as Pluggable,
    ],
  },
});
