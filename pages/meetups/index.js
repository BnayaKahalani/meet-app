import Link from 'next/link'

const MeetupsPage = ({ data }) => {
  return (
    <div>
      {data.map((m) => (
        < Link key={m.id} href={`/meetups/${m.id}`
        }>
          <img src={m.image} alt={m.title} width={300} />
          <h2>{m.title}</h2>
          <p>{m.description}</p>
        </Link>
      ))
      }
    </div >
  )
}

export default MeetupsPage

export async function getStaticProps() {
  const { meetups_categories } = await import('data/data.json')

  return {
    props: {
      data: meetups_categories
    }
  }
}

