const MetricsSummaryCard = ({ name, value }) => {
  return (
    <div>
      <div className="text-primary-text rounded-lg p-2.5 flex flex-col transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-105 bg-[#131f4c] hover:bg-[#e91e63]">
        <span className="text-xs lg:text-sm mb-4">{name}</span>
        <span className="text-lg lg:text-3xl font-semibold">{value}</span>
      </div>
    </div>
  );
};

export default MetricsSummaryCard;
