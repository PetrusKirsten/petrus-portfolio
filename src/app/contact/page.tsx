import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <SectionTitle>Contact</SectionTitle>
      <p className="mt-2 text-muted max-w-2xl">
        Let’s talk about projects, research, or ideas. You can send me a message below
        or reach me at <a className="underline" href="mailto:petrus.kirsten@gmail.com">petrus.kirsten@gmail.com</a>.
      </p>

      <form
        className="mt-8 grid gap-4 max-w-xl"
        action="https://formspree.io/f/your-form-id" /* troque quando criar o form */
        method="POST"
      >
        <input
          className="rounded-md border border-border bg-bg px-4 py-2"
          type="text" name="name" placeholder="Your name" required
        />
        <input
          className="rounded-md border border-border bg-bg px-4 py-2"
          type="email" name="email" placeholder="Your email" required
        />
        <textarea
          className="min-h-[140px] rounded-md border border-border bg-bg px-4 py-2"
          name="message" placeholder="Your message" required
        />
        <button
          className="justify-self-start rounded-md border border-border px-4 py-2 hover:shadow-soft hover:border-primary/50"
          type="submit"
        >
          Send
        </button>
      </form>

      <div className="mt-8 flex items-center gap-4 text-sm">
        <a className="underline" href="https://github.com/PetrusKirsten" target="_blank">GitHub</a>
        <a className="underline" href="https://www.linkedin.com/in/petrus-kirsten" target="_blank">LinkedIn</a>
        <a className="underline" href="mailto:petrus.kirsten@gmail.com">Email</a>
      </div>
    </section>
  );
}
