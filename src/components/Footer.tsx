export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="page-container h-16 flex items-center justify-between text-sm text-muted">
        <span>© {year} Petrus Kirsten</span>
        <div className="flex items-center gap-4">
          <a className="underline underline-offset-4 hover:text-primary" href="https://github.com/PetrusKirsten" target="_blank">GitHub</a>
          <a className="underline underline-offset-4 hover:text-secondary" href="https://www.linkedin.com/in/petrus-kirsten" target="_blank">LinkedIn</a>
          <a className="underline underline-offset-4" href="mailto:petrus.kirsten@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
