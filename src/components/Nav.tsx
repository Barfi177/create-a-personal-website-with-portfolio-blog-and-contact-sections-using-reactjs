import Link from 'next/link';
import styles from '../styles/layout.module.css';

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href="/"><a>Your Name</a></Link>
      </div>
      <nav>
        <Link href="/portfolio"><a>Portfolio</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </nav>
    </header>
  );
}