import { useSelector } from "react-redux";

export const GetRevenueSource = () =>
  useSelector((state) => state.chartSelectionData.revenueSource);
