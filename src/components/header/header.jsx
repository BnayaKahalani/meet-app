import Link from "next/link"

const Header = () => (
  <header>
    <div>
      <div className='topNav'>
        <nav>
          <ul>
            <li>
              <Link
                href='/'
                passHref
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/meetups'
                passHref
              >
                Meetups
              </Link>
            </li>
            <li>
              <Link
                href='/about-us'
                passHref
              >
                About us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className='title'> Where should we meet?</p>
    </div>
  </header>
)

export default Header
