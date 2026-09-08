import { useState, type FormEvent } from "react";

import { submitContact } from "../api";

type Status = { kind: "idle" | "sending" } | { kind: "sent" } | { kind: "error"; message: string };

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus({ kind: "sending" });
    try {
      await submitContact({ name, email, message });
      setStatus({ kind: "sent" });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Something went wrong",
      });
    }
  }

  return (
    <section className="section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__field">
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={120}
          />
        </label>
        <label className="form__field">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="form__field">
          <span>Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            maxLength={5000}
          />
        </label>

        <button type="submit" className="button" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : "Send"}
        </button>

        {status.kind === "sent" && (
          <p className="notice notice--ok">Thanks — I&apos;ll get back to you.</p>
        )}
        {status.kind === "error" && (
          <p className="notice notice--error">{status.message}</p>
        )}
      </form>
    </section>
  );
}
