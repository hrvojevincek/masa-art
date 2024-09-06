import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex sm:flex-col gap-6 w-1/3">
      <div className="space-y-2">
        <Link href="/">
          <h1 className="text-2xl font-bold">Maša Kovljenić</h1>
          <p className="text-muted-foreground">Visual Artist</p>
        </Link>
      </div>
      <nav className="flex flex-col gap-2">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
          prefetch={false}
        >
          work
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
          prefetch={false}
        >
          about
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
          prefetch={false}
        >
          contact
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
