import CatMeetup from '../../../src/components/meetups/catMeetup';

const MeetupCatPage = ({ data, pageName }) => <CatMeetup data={data} pageName={pageName} />;

export default MeetupCatPage;

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