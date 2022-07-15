// import * as fs from 'fs';

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: { res: any }) => {
  // const BASE_URL = 'https://clikxx.com';

  // const dirSync = {
  //   development: 'pages',
  //   production: 'pages',
  //   test: 'pages',
  // }[process.env.NODE_ENV];

  // const staticPaths = fs
  //   .readdirSync(dirSync)
  //   .filter((staticPage) => {
  //     return ![
  //       'sitemap.xml',
  //       '404',
  //       'about',
  //       'favorites',
  //       'random',
  //       'search',
  //       'video',
  //     ].includes(staticPage);
  //   })
  //   .map((staticPagePath) => {
  //     return `${BASE_URL}/${staticPagePath.replace('.tsx', '')}`;
  //   });

  // const blogs = await getAllBlogPosts(); // your custom API call

  //   An example of what an individual blog post object will look like:
  //   blog = {
  //     id: 2123,
  //     title: "My amazing blog post",
  //     slug: "amazing-post"
  //   }

  // const dynamicPaths = blogs.map((singleBlog) => {
  //   return `${BASE_URL}/blog/${singleBlog.slug}`;
  // });

  // const allPaths = [...staticPaths /*, ...dynamicPaths*/];

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://clikxx.com/404</loc>
    </url>
    <url>
    <loc>https://clikxx.com/about</loc>
    </url>
    <url>
    <loc>https://clikxx.com/favorites</loc>
    </url>
    <url>
    <loc>https://clikxx.com/index</loc>
    </url>
    <url>
    <loc>https://clikxx.com/random</loc>
    </url>
    <url>
    <loc>https://clikxx.com/search</loc>
    </url>
    <url>
    <loc>https://clikxx.com/sitemap.xml</loc>
    </url>
    <url>
    <loc>https://clikxx.com/video</loc>
    </url>
    <url>
    <loc>https://clikxx.com/_app</loc>
    </url>
    </urlset>`;

  // const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  //   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //     ${allPaths
  //       .map((url) => {
  //         return `
  //           <url>
  //             <loc>${url}</loc>
  //           </url>
  //         `;
  //       })
  //       .join('')}
  //   </urlset>
  // `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
