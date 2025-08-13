type Props = {
  title: string;
  description: string;
  tags: string[];
  hrefRepo?: string;
  hrefDemo?: string;
};

export default function ProjectCard({ title, description, tags, hrefRepo, hrefDemo }: Props) {
  return (
    <div className="group rounded-xl border border-border p-4 transition
      hover:shadow-soft hover:border-primary/50">

      <h3 className="font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-muted">{description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-md border border-border font-mono
                       group-hover:border-primary/40"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-3 text-sm">
        {hrefRepo && <a className="underline underline-offset-4 hover:text-primary"   href={hrefRepo} target="_blank">Repo</a>}
        {hrefDemo && <a className="underline underline-offset-4 hover:text-secondary" href={hrefDemo} target="_blank">Demo</a>}
      </div>

    </div>
  );
}

