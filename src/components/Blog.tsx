import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Blog({ posts }) {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(p => (
          <li key={p.slug} style={{ marginBottom: 16 }}>
            <Link href={`/blog/${p.slug}`}><a><h3>{p.data.title}</h3></a></Link>
            <small>{p.data.date}</small>
            <p>{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);
  const posts = filenames.map((name) => {
    const slug = name.replace(/\.md$/, '');
    const fileContents = fs.readFileSync(path.join(postsDir, name), 'utf8');
    const { data, content } = matter(fileContents);
    const excerpt = content.slice(0, 200) + (content.length > 200 ? '...' : '');
    return { slug, data, excerpt };
  }).sort((a,b) => new Date(b.data.date) - new Date(a.data.date));
  return { props: { posts } };
}