export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-10">
      <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Arklight LLC</p>
      <p className="text-xs text-neutral-600">New York</p>
    </footer>
  )
}
