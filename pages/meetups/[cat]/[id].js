import SingleMeetup from '../../../src/components/meetups/single-meetup';

const MeetupPage = ({ data }) => <SingleMeetup data={data} />;

export default MeetupPage;

export async function getStaticPaths() {
  const data = await import('/data/data.json')
  const allMeetups = data.allMeetups

  const allPaths = allMeetups.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const { allMeetups } = await import('data/data.json')
  const meetupData = allMeetups.find(m => id === m.id)

  return {
    props: {
      data: meetupData
    }
  }
}

