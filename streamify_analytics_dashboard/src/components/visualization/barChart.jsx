import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const BarChart = () => {
  const data = {
    labels: ["Song A", "Song B", "Song C", "Song D", "Song E"],
    datasets: [
      {
        label: "Streams (in thousands)",
        data: [1500, 1300, 1100, 900, 700],
        backgroundColor: [
          "#582df1",
          "#e65956",
          "#f9a13c",
          "#04b70a",
          "#cd5093",
        ],
        borderColor: ["#582df1", "#e65956", "#f9a13c", "#04b70a", "#cd5093"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        font: {
          size: 12,
          family: "Karla, serif",
        },
      },
      title: {
        display: true,
        text: "Top 5 Most Streamed Songs (Last 30 Days)",
        color: "white",
        font: {
          size: 13,
          weight: "normal",
          family: "Karla, serif",
        },
        padding: {
          top: 5,
          bottom: 15,
        },
      },
      datalabels: {
        color: "black",
        display: true,
        font: { size: 12, family: "Karla, serif" },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Streams (in thousands)",
        },
        ticks: {
          color: "white",
          font: { size: 12, family: "Karla, serif" },
        },
      },
      x: {
        title: {
          display: true,
          text: "Songs",
        },
        ticks: {
          color: "white",
          font: { size: 12, family: "Karla, serif" },
        },
      },
    },
  };

  return (
    <div className="h-full w-full bg-[#131f4c] p-4 rounded-md">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
