import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 space-y-6">
      <SectionTitle>About</SectionTitle>
      <p className="text-muted max-w-3xl">
        I’m a developer and researcher blending technology, science and creativity.
        Ph.D. candidate in Applied Physics to Medicine and Biology (USP) and Data Science undergrad (Univesp).
        I like building things that are useful, curious — or both.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border p-4">
          <h3 className="font-semibold">Tech</h3>
          <p className="mt-2 text-sm text-muted">
            Full Stack (React/Next.js, Node/Express), Data Science (Python, Pandas),
            and automation with microcontrollers (Arduino/ESP32).
          </p>
        </div>
        <div className="rounded-xl border border-border p-4">
          <h3 className="font-semibold">Science</h3>
          <p className="mt-2 text-sm text-muted">
            Neuroscience tools, signal processing (EMG, Raman), computational modeling
            (Hindmarsh–Rose), and scientific visualization.
          </p>
        </div>
        <div className="rounded-xl border border-border p-4">
          <h3 className="font-semibold">Creativity</h3>
          <p className="mt-2 text-sm text-muted">
            Creative coding & generative art — exploring patterns, motion, and data‑driven visuals.
          </p>
        </div>
        <div className="rounded-xl border border-border p-4">
          <h3 className="font-semibold">Maker</h3>
          <p className="mt-2 text-sm text-muted">
            From circuit to code: prototypes with sensors, LEDs, and robotics; open‑source by default.
          </p>
        </div>
      </div>
    </section>
  );
}
