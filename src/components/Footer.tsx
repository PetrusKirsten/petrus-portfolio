export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between text-sm text-muted">
        <span>© {new Date().getFullYear()} Petrus Kirsten</span>
        <span>Tech • Science • Creativity</span>
      </div>
    </footer>
  );
}
