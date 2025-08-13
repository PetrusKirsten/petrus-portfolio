import SectionTitle from "./SectionTitle";

type Props = {
  title?: string;
  subtitle?: string;
  id?: string;
  children: React.ReactNode;
  actions?: React.ReactNode; // botões/links no topo à direita
};

export default function Section({ title, subtitle, id, children, actions }: Props) {
  return (
    <section id={id} className="section-pad">
      <div className="page-container">
        {(title || subtitle || actions) && (
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              {title && <SectionTitle>{title}</SectionTitle>}
              {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
            </div>
            {actions}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
