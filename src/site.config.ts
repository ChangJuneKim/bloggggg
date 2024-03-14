const SiteConfig = {
  url: `https://www.changjune.com`,
  title: '김창준의 블로그',
  copyright: `© ${new Date().getFullYear()} by ChangJuneKim. All rights reserved.`,

  postsPerPage: 5, // 페이지당 포스트 수
  pagesPerGroup: 5, // 한 페이지 그룹에 포함될 페이지 수

  nav: [
    { name: 'Posts', link: '/posts/categories/all/pages/1' },
    { name: 'Resume', link: '/resume' },
  ],

  links: {
    rss: `https://www.changjune.com/rss.xml`,
    github: 'https://github.com/ChangJuneKim',
    portfolio: 'https://right-longship-995.notion.site/ef3c5c9f65524f119c7bea33a8c95fcb?pvs=4',
    email: 'mailto:kchang6869@gmail.com',
    myBlog: {
      website: `https://www.changjune.com`,
      projectNotion: `https://right-longship-995.notion.site/d46d259c1bb4405796cdd69b10952408`,
      projectGit: 'https://github.com/ChangJuneKim/bloggggg',
    },
    zippy: {
      projectNotion:
        'https://right-longship-995.notion.site/ZippyZiggy-ChatGPT-a1dd7fcee99a4d38a2d1af21c437e5fd',
      website: 'https://zippyziggy.kr',
      chromeWebStore:
        'https://chrome.google.com/webstore/detail/zippyziggy-chatgpt-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EB%A5%BC/gcinlhaphmofekpjjjcnbiigbgnffokc?hl=ko',
      projectGit: 'https://github.com/bbookng/zippyziggy-v2',
    },
    tryCatch: {
      projectNotion:
        'https://right-longship-995.notion.site/Try-Catch-891b890080ed4fedafc3f884147d1305',
      projectGit: 'https://github.com/ChangJuneKim/tryCatch',
    },
  },
};

export default SiteConfig;
