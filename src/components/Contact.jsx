import { contact } from "../data/contact";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact me</h2>
      <p className="contact-message">{contact.message}</p>
      <a className="email-link" href={`mailto:${contact.email}`}>
        {contact.email}
      </a>
      <ul className="contact-links">
        {contact.links.map((link) => (
          <li key={link.label}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}