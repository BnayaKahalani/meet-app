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
                Events
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
      <p className='title'> Sed ut perspiciatis unde omnis</p>
    </div>
  </header>
)

export default Header
