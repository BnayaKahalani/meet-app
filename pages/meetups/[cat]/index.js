const MeetupsCatPage = () => {
  return (
    <div>
      <h1>Meetups in Jerusalem</h1>
      <a href="/meetups/jerusalem/meetup1">Meetup 1</a>
      <a href="/meetups/meetup2">Meetup 2</a>
      <a href="/meetups/meetup3">Meetup 3</a>
      <a href="/meetups/meetup4">Meetup 4</a>
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
  console.log('allPaths:', allPaths)
  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  console.log('context:', context)
  const id = context?.params.cat
  const { allMeetups } = await import('data/data.json')

  const data = allMeetups.filter(m => m.city === id)
  console.log('data:', data)


  return {
    props: {}
  }
}