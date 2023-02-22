import Image from 'next/image';
import Link from 'next/link';

const MeetupsCatPage = ({ data, pageName }) => {
  return (
    <div>
      <h1>Meetups in {pageName}</h1>
      {data.map(m => (
        <Link key={m.id} href={`/meetups/${m.city}/${m.id}`} passHref>
          <Image src={m.image} alt={m.title} width={600} height={400} />
          <h2>{m.title}</h2>
          <p>{m.description}</p>
        </Link>
      ))
      }
    </div>
  )
}

export default MeetupsCatPage

export async function getStaticPaths() {
  const { meetups_categories } = await import('data/data.json')
  const allPaths = meetups_categories.map((m) => {
    return {
      params: {
        cat: m.id.toString()
      }
      ,
    }
  }
  )

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {

  const id = context?.params.cat
  const { allMeetups } = await import('data/data.json')

  const data = allMeetups.filter(m => m.city === id)


  return {
    props: { data, pageName: id }
  }
}