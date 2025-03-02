import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="text-primary">Broti</span>
              <span>Dev</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Crafting interactive web experiences</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Broti Sunder Bachi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

