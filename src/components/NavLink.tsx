"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type Props = { href: string; children: React.ReactNode };

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={clsx(
        "relative group text-sm",
        active && "text-primary"
      )}
    >
      {children}
      <span
        className={clsx(
          "absolute left-0 -bottom-1 h-[2px] bg-primary transition-all",
          active ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}
