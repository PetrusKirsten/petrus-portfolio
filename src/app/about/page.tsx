import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section title="About" subtitle="Tech • Science • Creativity • Maker">
      <div className="space-y-6 max-w-3xl">
        <p className="text-muted">
          I’m a developer and researcher blending technology, science and creativity.
          Ph.D. candidate in Applied Physics to Medicine and Biology (USP) and
          Data Science undergraduate (Univesp). I enjoy building tools and
          applications that are useful, curious — or both.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border p-4">
            <h3 className="font-semibold">Tech</h3>
            <p className="mt-2 text-sm text-muted">
              Full Stack (React/Next.js, Node/Express), Data (Python, Pandas, NumPy)
              and APIs. Comfortable with SQL/MongoDB, Git/GitHub and deployment.
            </p>
          </div>

          <div className="rounded-xl border border-border p-4">
            <h3 className="font-semibold">Science</h3>
            <p className="mt-2 text-sm text-muted">
              Neuroscience tools and computational modeling (Hindmarsh–Rose),
              signal processing (EMG, Raman), and scientific visualization.
            </p>
          </div>

          <div className="rounded-xl border border-border p-4">
            <h3 className="font-semibold">Creativity</h3>
            <p className="mt-2 text-sm text-muted">
              Creative coding & generative art with p5.js/Processing: exploring
              patterns, motion, and data‑driven visuals.
            </p>
          </div>

          <div className="rounded-xl border border-border p-4">
            <h3 className="font-semibold">Maker</h3>
            <p className="mt-2 text-sm text-muted">
              From circuit to code: prototypes with sensors, LEDs and robotics.
              Open‑source by default; documentation and reproducibility matter.
            </p>
          </div>
        </div>

        <p className="text-sm text-muted">
          I’ve been a dinosaur, science and tech enthusiast since I was a kid — that
          curiosity still guides my work today.
        </p>
      </div>
    </Section>
  );
}
