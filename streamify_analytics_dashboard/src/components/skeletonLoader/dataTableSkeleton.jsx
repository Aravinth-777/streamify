import { Skeleton } from "@mui/material";

const DataTableSkeleton = () => {
  const numArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid grid-cols-6 gap-4 border-1 border-gray-400 p-3 rounded-sm w-3/4 bg-[#131f4c]">
      {numArray.map((item, index) => (
        <Skeleton
          key={index} // Add a unique key prop
          animation="wave"
          height={50}
          sx={{ backgroundColor: "darkgray" }}
        />
      ))}
      {numArray.map((item, index) => (
        <Skeleton
          key={index} // Add a unique key prop
          animation="wave"
          height={30}
          sx={{ backgroundColor: "darkgray" }}
        />
      ))}
      {numArray.map((item, index) => (
        <Skeleton
          key={index} // Add a unique key prop
          animation="wave"
          height={30}
          sx={{ backgroundColor: "darkgray" }}
        />
      ))}
      {numArray.map((item, index) => (
        <Skeleton
          key={index} // Add a unique key prop
          animation="wave"
          height={30}
          sx={{ backgroundColor: "darkgray" }}
        />
      ))}
      {numArray.map((item, index) => (
        <Skeleton
          key={index} // Add a unique key prop
          animation="wave"
          height={30}
          sx={{ backgroundColor: "darkgray" }}
        />
      ))}
      {numArray.map((item, index) => (
        <Skeleton
          key={index} // Add a unique key prop
          animation="wave"
          height={30}
          sx={{ backgroundColor: "darkgray" }}
        />
      ))}
    </div>
  );
};

export default DataTableSkeleton;
