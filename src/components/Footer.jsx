export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-8">
      <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Arklight LLC</p>
      <p className="text-xs text-neutral-400">New York · New Jersey</p>
    </footer>
  )
}
