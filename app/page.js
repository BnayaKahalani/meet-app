import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <img src="" alt="" />
          <a href="/">Home</a>
          <a href="/events">Meetups</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>

      <main>
        <a href="">
          <img src="" alt="" />
          <h2>Meetups in Jerusalem</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ut eligendi vitae numquam error sapiente culpa iusto dicta autem dignissimos nemo, aperiam excepturi adipisci aut.</p>
        </a>
        <a href="">
          <img src="" alt="" />
          <h2>Meetups in Tel Aviv</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ut eligendi vitae numquam error sapiente culpa iusto dicta autem dignissimos nemo, aperiam excepturi adipisci aut.</p>
        </a>
        <a href="">
          <img src="" alt="" />
          <h2>Meetups in Haifa</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ut eligendi vitae numquam error sapiente culpa iusto dicta autem dignissimos nemo, aperiam excepturi adipisci aut.</p>
        </a>
      </main>
    </>
  )
}
