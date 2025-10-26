import { getCollection } from 'astro:content';

const posts = await getCollection("blog");
const poemas = posts.filter(p => p.data.category === "poema").slice(0, 3);

poemas.forEach(post => {
  console.log('ID:', post.id);
  const match = post.id.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
  console.log('Match:', match ? `Yes - slug: ${match[2]}` : 'No');
  console.log('---');
});
