import Link from "next/link"

const Header = () => (
  <header>
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/meetups'>Meetups</Link>
      <Link href='/about-us'>About Us</Link>
    </nav>
  </header>
)

export default Header
