import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useDispatch } from "react-redux";
import { setRevenueSource } from "../../store/chartSelectionSlice";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const dispatch = useDispatch();
  const data = {
    labels: ["Subscriptions", "Ads", "Sponsorships", "Other"],
    datasets: [
      {
        label: "Revenue (in $)",
        data: [500000, 30000, 150900, 170050],
        backgroundColor: ["#582df1", "#e65956", "#f9a13c", "#cd5093"],
        borderColor: ["#582df1", "#e65956", "#f9a13c", "#cd5093"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Revenue Distribution",
        color: "white",
        font: {
          size: 13,
          weight: "normal",
          family: "Karla, serif",
        },
        padding: {
          top: 5,
          bottom: 5,
        },
      },
      datalabels: {
        color: "black",
        display: true, // Always show data labels
        font: { size: 12, family: "Karla, serif" },
      },
      legend: {
        position: "top",
        labels: {
          color: "white",
          font: {
            size: 12,
            family: "Karla, serif",
          },
        },
      },
    },
    onClick: (event, elements) => {
      if (elements && elements.length > 0) {
        const clickedSegment = elements[0];
        const label = data.labels[clickedSegment.index];
        dispatch(setRevenueSource(label));
      }
    },
  };

  return (
    <div className="h-full w-full bg-[#131f4c] p-4 rounded-md">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
