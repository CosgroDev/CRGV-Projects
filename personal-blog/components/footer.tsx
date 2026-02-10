export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dale Cosgrove. All rights reserved.</p>
          <a
            href="mailto:dale@cgrv.co.uk"
            className="hover:text-foreground transition-colors"
          >
            dale@cgrv.co.uk
          </a>
        </div>
      </div>
    </footer>
  )
}
