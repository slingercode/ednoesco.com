import Container from '../../components/Container';
import Event from '../../components/events/event';
import useEvents from '../../hooks/events/events';
import { getDatabase } from '../../lib/notion';

const Events = ({ events }) => {
  const { data } = useEvents(events);

  return (
    <Container title="Slingercode - timeline">
      <div className="grid md:grid-flow-row md:grid-cols-3 gap-3">
        {data.map((event) => (
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

export const getServerSideProps = async () => {
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
  };
};

export default Events;
