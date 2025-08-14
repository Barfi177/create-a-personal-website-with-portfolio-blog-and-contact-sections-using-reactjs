import Nav from './Nav';
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Your Name — Built with Next.js
      </footer>
    </div>
  );
}