"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure the page scrolls to the top on every route change
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  }, [pathname]);

  return null;
}
