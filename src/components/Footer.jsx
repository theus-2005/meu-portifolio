export default function Footer() {
  return(
    <footer className="w-screen h-[6vh] bg-neutral-900 flex items-center px-6 relative z-50 justify-center">
      <p>© {new Date().getFullYear()} Matheus Garcia. Todos os direitos reservados.</p>
    </footer>
  )
}