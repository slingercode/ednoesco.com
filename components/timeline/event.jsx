const Event = ({ name, description, date }) => {
  const diffDates = (date) => {
    const compare = new Date(date);
    const current = new Date().setHours(0, 0, 0, 0);

    const diffTime = Math.abs(current - compare);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="px-4 py-2 rounded-sm border border-gray-border-non-interactive text-gray-font-low hover:text-gray-font-high hover:border-gray-border-hover">
      <div>{name}</div>
      <div>{description}</div>
      <div>
        {diffDates(date) !== 0 ? `days remaining: ${diffDates(date)}` : 'TODAY'}
      </div>
    </div>
  );
};

export default Event;
