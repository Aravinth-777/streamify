import { Avatar } from "@mui/material";

const CustomAppbar = () => {
  return (
    <div className="pl-4 pr-8 pt-2.5 pb-2.5 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://img.freepik.com/free-vector/abstract-logo-template_1195-13.jpg?t=st=1739823153~exp=1739826753~hmac=26d371d5a827594739559d1d5110361f264346d29ddbe6afdcc03fd5897f98c8&w=740"
          className="h-10 w-10 rounded-3xl"
        />
        <span className="text-md lg:text-2xl ml-3 font-semibold">
          Streamify Dashboard
        </span>
      </div>
      <Avatar />
    </div>
  );
};

export default CustomAppbar;
