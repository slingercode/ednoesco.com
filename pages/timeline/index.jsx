import Container from '../../components/Container';
import Event from '../../components/timeline/event';
import { getDatabase } from '../../lib/notion';

const Timeline = ({ events }) => {
  return (
    <Container title="Slingercode - timeline">
      <div className="grid md:grid-flow-row md:grid-cols-3 gap-3">
        {events.map((event) => (
          <Event
            key={event.id}
            name={event.properties.Name.title[0].plain_text}
            description={event.properties.Description.rich_text[0].plain_text}
            date={event.properties.Date.date.start}
          />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const sorts = [
    {
      property: 'Date',
      direction: 'ascending',
    },
  ];

  const database = await getDatabase(
    process.env.NOTION_TABLE_TIMELINE_ID,
    sorts
  );

  return {
    props: {
      events: database,
    },
    revalidate: 10,
  };
};

export default Timeline;
