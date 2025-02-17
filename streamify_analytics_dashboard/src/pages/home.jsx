import MetricsSummaryCard from "../components/metricsSummaryCard";
import CustomAppbar from "../components/customAppbar";

const Home = () => {
  return (
    <div>
      <CustomAppbar />
      <div className="p-2">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/5 lg:w-1/5 p-4">
            <MetricsSummaryCard name={"Total Users"} value={"15,12,335"} />
          </div>
          <div className="w-full sm:w-1/5 lg:w-1/5 p-4">
            <MetricsSummaryCard name={"Active Users"} value={"9,09,157"} />
          </div>
          <div className="w-full sm:w-1/5 lg:w-1/5 p-4">
            <MetricsSummaryCard name={"Total Streams"} value={"65,198,075"} />
          </div>
          <div className="w-full sm:w-1/5 lg:w-1/5 p-4">
            <MetricsSummaryCard name={"Revenue"} value={"$17,98,435,907"} />
          </div>
          <div className="w-full sm:w-1/5 lg:w-1/5 p-4">
            <MetricsSummaryCard name={"Top Artist"} value={"Eminem"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
