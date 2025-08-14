import Layout from '../components/Layout';

export default function Contact() {
  // Replace the action URL with your Formspree endpoint or server endpoint
  const formAction = 'https://formspree.io/f/{your_form_id}';

  return (
    <Layout>
      <h1>Contact</h1>
      <p>Prefer email? <a href="mailto:you@example.com">you@example.com</a></p>

      <form action={formAction} method="POST" style={{ maxWidth: 600 }}>
        <label>
          Name
          <br />
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email
          <br />
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Message
          <br />
          <textarea name="message" rows="6" required />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
}