import Layout from '../components/Layout';
import Link from 'next/link';
import projects from '../data/projects';

export default function Home() {
  const featured = projects.slice(0, 3);
  return (
    <Layout>
      <section style={{ padding: '2rem 0' }}>
        <h1>Hi, I'm Your Name</h1>
        <p>Short tagline — what you do, technologies, etc.</p>
        <p>
          <Link href="/portfolio"><a>See my work</a></Link> · <Link href="/blog"><a>Read my blog</a></Link>
        </p>
      </section>

      <section>
        <h2>Featured Projects</h2>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {featured.map(p => (
            <div key={p.id} style={{ border: '1px solid #ddd', padding: 12, width: 300 }}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <Link href="/portfolio"><a>View all</a></Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}