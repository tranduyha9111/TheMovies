"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export default function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative font-semibold transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                 md:text-[1.5rem] md:leading-[2rem] 
                 bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-violet-500
                 ${isActive ? "text-red-500" : "text-white"}`}
    >
      {children}

      {/* Underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[3px] w-full bg-red-600 rounded-xl
                   origin-left transition-transform duration-300
                   ${isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"}`}
      />
    </Link>
  );
}
