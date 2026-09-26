"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();
  const [open, setOpen] = useState(false);

  const linkClass = (active: boolean) =>
    `rounded-full px-3 py-1.5 text-sm font-medium transition ${
      active ? "bg-white/10 text-accent" : "text-gray-400 hover:text-white"
    }`;

  const mobileLinkClass = (active: boolean) =>
    `block rounded-lg px-4 py-3 text-sm font-medium transition ${
      active ? "bg-white/10 text-accent" : "text-gray-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[#0b0b0b]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3">
        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 sm:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="FitLog" width={32} height={32} className="h-8 w-8" />
          <span className="hidden font-display text-xl tracking-wide sm:block">FITLOG</span>
        </Link>

        {/* Links (desktop only) */}
        <div className="hidden gap-1 sm:flex">
          <Link href="/" className={linkClass(pathname === "/" || pathname.startsWith("/workout"))}>
            Workout
          </Link>
          <Link href="/my-plan" className={linkClass(pathname === "/my-plan")}>
            My Plan
          </Link>
        </div>

        {/* Badges */}
        <div className="flex gap-2 text-xs font-semibold sm:text-sm">
          <Link href="/my-plan" className="rounded-full bg-accent px-3 py-1 text-black">
            Plan {plan.length}
          </Link>
          <Link href="/my-plan" className="rounded-full border border-gray-500 px-3 py-1">
            Saved {saved.length}
          </Link>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="flex flex-col gap-1 border-t border-line px-4 py-3 sm:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={mobileLinkClass(pathname === "/" || pathname.startsWith("/workout"))}
          >
            Workout
          </Link>
          <Link
            href="/my-plan"
            onClick={() => setOpen(false)}
            className={mobileLinkClass(pathname === "/my-plan")}
          >
            My Plan
          </Link>
        </div>
      )}
    </header>
  );
}