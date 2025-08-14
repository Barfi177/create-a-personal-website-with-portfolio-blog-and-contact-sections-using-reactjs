import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Layout from '../../components/Layout';

export default function Post({ contentHtml, data }) {
  return (
    <Layout>
      <article>
        <h1>{data.title}</h1>
        <small>{data.date}</small>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);
  const paths = filenames.map(name => ({ params: { slug: name.replace(/\.md$/, '') } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postsDir = path.join(process.cwd(), 'posts');
  const fileContents = fs.readFileSync(path.join(postsDir, `${params.slug}.md`), 'utf8');
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return { props: { contentHtml, data } };
}