import React from 'react';

const MeetupsPage = ({ data }) => {
  return (
    <div>
      <h1>Meetups Page</h1>
      {data.map((m) => (
        < a key={m.id} href={`/meetups/${m.id}`
        }>
          <img src={m.image} alt={m.title} width={300} />
          <h2>{m.title}</h2>
        </a>
      ))
      }
    </div >
  )
}

export default MeetupsPage

export async function getStaticProps() {
  const { meetups_categories } = await import('data/data.json')
  console.log('meetups_categories:', meetups_categories)

  return {
    props: {
      data: meetups_categories
    }
  }
}

