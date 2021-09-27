import { useEffect, useState } from 'react';
import { compare as Gcompare, diff as Gdiff, reform } from 'gregorian';

const useEvents = (events) => {
  const [localData, setLocalData] = useState(events);

  const compare = (today, date) => Gcompare(new Date(today), new Date(date));
  const diff = (today, date) =>
    Gdiff('d')(new Date(today))(new Date(date)).toFixed();

  useEffect(() => {
    const newData = events.map((event) => {
      const date = event.properties.Date.date.start;
      const today = reform('Y-M-D')(new Date());

      const eventHasAlreadyPassed = compare(today, date) === -1;
      const eventIsToday = compare(today, date) === 0;
      const eventDaysRemaining = diff(today, date);

      return {
        ...event,
        eventHasAlreadyPassed,
        eventIsToday,
        eventDaysRemaining,
      };
    });

    setLocalData(newData);
  }, [events]);

  return { data: localData };
};

export default useEvents;
