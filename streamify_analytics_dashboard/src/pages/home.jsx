import MetricsSummaryCard from "../components/metricsSummaryCard";
import CustomAppbar from "../components/customAppbar";
import MultiLineChart from "../components/visualization/multiLineChart";
import PieChart from "../components/visualization/pieChart";
import BarChart from "../components/visualization/barChart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetChartSelectionData } from "../store/chartSelectionSlice";
import { Suspense, lazy } from "react";
import DataTableSkeleton from "../components/skeletonLoader/dataTableSkeleton";

// Lazy load the component
const DataTable = lazy(() => import("../components/visualization/dataTable"));

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetChartSelectionData());
  }, []);

  return (
    <div>
      <CustomAppbar />
      <div className="p-2 pl-3 lg:pl-8 pr-3 lg:pr-8">
        <div className="flex flex-wrap justify-between mb-4 mt-2 gap-y-4 sm:gap-y-4 sm:gap-x-2">
          <div className="w-full sm:w-[48%] md:w-[19%]">
            <MetricsSummaryCard name={"Total Users"} value={"15,12,335"} />
          </div>
          <div className="w-full sm:w-[48%] md:w-[19%]">
            <MetricsSummaryCard name={"Active Users"} value={"9,09,157"} />
          </div>
          <div className="w-full sm:w-[48%] md:w-[19%]">
            <MetricsSummaryCard name={"Total Streams"} value={"65,198,075"} />
          </div>
          <div className="w-full sm:w-[48%] md:w-[19%]">
            <MetricsSummaryCard name={"Revenue"} value={"$17,98,435,907"} />
          </div>
          <div className="w-full sm:w-[48%] md:w-[19%]">
            <MetricsSummaryCard name={"Top Artist"} value={"Eminem"} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 mt-10 mb-10 justify-between">
          <div className="rounded-2xl p-2 col-span-3 lg:col-span-1 h-[55vh] sm:h-[30vh] lg:h-[40vh]">
            <MultiLineChart />
          </div>
          <div className="rounded-2xl p-2 col-span-3 lg:col-span-1 h-[55vh] sm:h-[30vh] lg:h-[40vh]">
            <PieChart />
          </div>
          <div className="rounded-2xl p-2 col-span-3 lg:col-span-1 h-[55vh] sm:h-[30vh] lg:h-[40vh]">
            <BarChart />
          </div>
        </div>
        <div className="mt-4 mb-6 w-full flex justify-center">
          <Suspense fallback={<DataTableSkeleton />}>
            <DataTable />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
