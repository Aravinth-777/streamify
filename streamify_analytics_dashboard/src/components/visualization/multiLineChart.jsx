import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const MultiLineChart = () => {
  // Data for the past 12 months
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Total Users",
        data: [
          1000, 1200, 1500, 1800, 2100, 2500, 3000, 3600, 4200, 4900, 5700,
          6500,
        ],
        borderColor: "#0088FE",
        backgroundColor: "#0088FE",
        tension: 0.3,
      },
      {
        label: "Active Users",
        data: [
          500, 700, 900, 1100, 1300, 1600, 2000, 2400, 2900, 3500, 4100, 4800,
        ],
        borderColor: "#FF4444",
        backgroundColor: "#FF4444",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
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
      title: {
        display: true,
        text: "User Growth Over the Past 12 Months",
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
        color: "white",
        display: false,
        font: { size: 12, family: "Karla, serif" },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "white",
          font: { size: 12, family: "Karla, serif" },
        },
      },
      x: {
        ticks: {
          color: "white",
          font: { size: 12, family: "Karla, serif" },
        },
      },
    },
  };

  return (
    <div className="h-full w-full bg-[#131f4c] p-4 rounded-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default MultiLineChart;
