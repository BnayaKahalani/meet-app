import AllMeetups from '../../src/components/meetups/meetups-page';

const MeetupsPage = ({ data }) => {
  return <AllMeetups data={data} />;
};

export default MeetupsPage;

export async function getStaticProps() {
  const { meetups_categories } = await import('/data/data.json');
  return {
    props: {
      data: meetups_categories,
    },
  };
}

