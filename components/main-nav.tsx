import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/locations"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Locations
      </Link>
      <Link
        href="/documents"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Documents
      </Link>
      <Link
        href="/contractors"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Contractors
      </Link>
    </nav>
  )
}