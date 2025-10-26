const posts = [
  { id: '2018-09-05-pincelada.md', data: { category: 'poema' } },
  { id: '2021-02-17-te-busco.md', data: { category: 'poema' } }
];

const result = posts
  .filter((post) => post.data.category === "poema")
  .map((post) => {
    // Extract date and slug from id (format: YYYY-MM-DD-title.md)
    const match = post.id.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
    
    if (match) {
      const [, date, slug] = match;
      console.log('Post ID:', post.id);
      console.log('  Date:', date);
      console.log('  Slug:', slug);
      console.log('  Params:', { slug });
      console.log('---');
      return {
        params: { slug },
        props: { post, date },
      };
    }
    
    return {
      params: { slug: post.id.replace(/\.md$/, "") },
      props: { post, date: null },
    };
  });

console.log('\nResult:', JSON.stringify(result, null, 2));
