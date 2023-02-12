// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const { meetups_categories } = await import('data/data.json')
  console.log('data:', data)
  return {
    props: {
      data: meetups_categories
    },
  }
}

export default function Home({ data }) {
  return (
    <>
      <header>
        <nav>
          <img src="" alt="" />
          <a href="/">Home</a>
          <a href="/meetups">Meetups</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>

      <main>
        <h1>{data}</h1>
        <a href="/meetups/jerusalem">
          <img src="" alt="" />
          <h2>Meetups in Jerusalem</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ut eligendi vitae numquam error sapiente culpa iusto dicta autem dignissimos nemo, aperiam excepturi adipisci aut.</p>
        </a>
        <a href="/meetups/tel-aviv">
          <img src="" alt="" />
          <h2>Meetups in Tel Aviv</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ut eligendi vitae numquam error sapiente culpa iusto dicta autem dignissimos nemo, aperiam excepturi adipisci aut.</p>
        </a>
        <a href="/meetups/haifa">
          <img src="" alt="" />
          <h2>Meetups in Haifa</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ut eligendi vitae numquam error sapiente culpa iusto dicta autem dignissimos nemo, aperiam excepturi adipisci aut.</p>
        </a>
      </main>
    </>
  )
}

