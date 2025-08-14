import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Portfolio() {
  return (
    <Layout>
      <section>
        <h1>Portfolio</h1>
        <p>Projects I've built.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 16 }}>
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </Layout>
  );
}