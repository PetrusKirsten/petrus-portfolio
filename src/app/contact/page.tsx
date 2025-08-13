import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="Let’s talk about projects, research or ideas">
      <div className="max-w-xl space-y-6">
        <p className="text-muted">
          You can send me a message using the form below or reach me directly via
          email and social links.
        </p>

        <form
          className="grid gap-4"
          action="https://formspree.io/f/your-form-id" /* substitua pelo ID real quando criar no Formspree */
          method="POST"
        >
          <input
            className="rounded-md border border-border bg-bg px-4 py-2"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
          <input
            className="rounded-md border border-border bg-bg px-4 py-2"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
          <textarea
            className="min-h-[140px] rounded-md border border-border bg-bg px-4 py-2"
            name="message"
            placeholder="Your message"
            required
          />
          <button
            className="btn btn-primary"
            type="submit"
          >
            Send
          </button>
        </form>

        <div className="pt-2 flex items-center gap-4 text-sm">
          <a className="underline underline-offset-4 hover:text-primary" href="https://github.com/PetrusKirsten" target="_blank">
            GitHub
          </a>
          <a className="underline underline-offset-4 hover:text-secondary" href="https://www.linkedin.com/in/petrus-kirsten" target="_blank">
            LinkedIn
          </a>
          <a className="underline underline-offset-4" href="mailto:petrus.kirsten@gmail.com">
            Email
          </a>
        </div>
      </div>
    </Section>
  );
}
