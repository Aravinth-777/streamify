const MetricsSummaryCard = ({ name, value }) => {
  return (
    <div>
      <div className="text-primary-text border-1 border-primary-border p-2.5 flex flex-col rounded-md">
        <span className="text-sm mb-4">{name}</span>
        <span className="text-3xl">{value}</span>
      </div>
    </div>
  );
};

export default MetricsSummaryCard;
