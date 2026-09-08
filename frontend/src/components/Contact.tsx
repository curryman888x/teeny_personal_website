import { useState, type FormEvent, type ReactNode } from "react";

import type { SiteContent } from "../types";
import { SectionHeading } from "./SectionHeading";

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const ICONS: Record<string, ReactNode> = {
  Email: (
    <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 5.6L19.8 6H4.2Zm15.8 1.3-7.4 5.3a1 1 0 0 1-1.2 0L4 7.8v10.7c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.8Z" />
  ),
  GitHub: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  LinkedIn: (
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H20v-5.4c0-1.29-.02-2.94-1.8-2.94-1.8 0-2.07 1.4-2.07 2.85V21H12V9Z" />
  ),
};

function IconLink({ label, href }: { label: string; href: string }) {
  return (
    <a className="social" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img" aria-hidden="true">
        {ICONS[label] ?? <circle cx="12" cy="12" r="9" />}
      </svg>
    </a>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

function ContactForm({ endpoint }: { endpoint: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label className="contact-form__field">
        <span>Name</span>
        <input type="text" name="name" required maxLength={120} />
      </label>
      <label className="contact-form__field">
        <span>Email</span>
        <input type="email" name="email" required />
      </label>
      <label className="contact-form__field">
        <span>Message</span>
        <textarea name="message" required rows={4} maxLength={5000} />
      </label>
      <button type="submit" className="button" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"}
      </button>
      {status === "sent" && <p className="contact-form__note">Thanks — I&apos;ll get back to you.</p>}
      {status === "error" && (
        <p className="contact-form__note contact-form__note--error">
          Something went wrong. Email me directly instead.
        </p>
      )}
    </form>
  );
}

export function Contact({ content }: { content: SiteContent }) {
  const { contact } = content;

  return (
    <section id="contact" className="section section--footer">
      <div className="container">
        <SectionHeading>{contact.heading}</SectionHeading>
        {contact.blurb && <p className="contact__blurb">{contact.blurb}</p>}

        <div className="social-row">
          <IconLink label="Email" href={`mailto:${contact.email}`} />
          {contact.links.map((link) => (
            <IconLink key={link.label} label={link.label} href={link.url} />
          ))}
        </div>

        {FORMSPREE && <ContactForm endpoint={FORMSPREE} />}
      </div>
    </section>
  );
}
