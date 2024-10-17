'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
          "hover:text-primary"
        )}
      >
        Overview
      </Link>
      <Link
        href="/locations"
        className={cn(
          "text-sm font-medium transition-colors",
          pathname === "/locations" ? "text-primary" : "text-muted-foreground",
          "hover:text-primary"
        )}
      >
        Locations
      </Link>
      <Link
        href="/documents"
        className={cn(
          "text-sm font-medium transition-colors",
          pathname === "/documents" ? "text-primary" : "text-muted-foreground",
          "hover:text-primary"
        )}
      >
        Documents
      </Link>
      <Link
        href="/contractors"
        className={cn(
          "text-sm font-medium transition-colors",
        pathname === "/contractors" ? "text-primary" : "text-muted-foreground",
          "hover:text-primary"
        )}
      >
        Contractors
      </Link>
    </nav>
  )
}
