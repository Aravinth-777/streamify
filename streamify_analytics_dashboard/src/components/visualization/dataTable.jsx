import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { GetRevenueSource } from "../../selector/chartSelectionSelector";
import { createTheme, ThemeProvider } from "@mui/material";

const customTheme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          fontFamily: "Karla, sans-serif",
          border: "none",
          padding: "1rem",
        },
      },
    },
  },
});

const columns = [
  { field: "id", headerName: "S.No", flex: 1, minWidth: 110 },
  { field: "songName", headerName: "Song Name", flex: 1, minWidth: 150 },
  { field: "artist", headerName: "Artist", flex: 1, minWidth: 140 },
  {
    field: "dateStreamed",
    headerName: "Date Streamed",
    flex: 1,
    minWidth: 170,
  },
  {
    field: "streamCount",
    headerName: "Stream Count",
    flex: 1,
    minWidth: 165,
  },
  { field: "userId", headerName: "User ID", flex: 1, minWidth: 130 },
];

const rows = [
  {
    id: 1,
    songName: "Shape of You",
    artist: "Ed Sheeran",
    dateStreamed: "2024-02-01",
    streamCount: 1200,
    userId: "U001",
    revenueSource: "Subscriptions",
  },
  {
    id: 2,
    songName: "Blinding Lights",
    artist: "The Weeknd",
    dateStreamed: "2024-02-02",
    streamCount: 950,
    userId: "U002",
    revenueSource: "Ads",
  },
  {
    id: 3,
    songName: "Levitating",
    artist: "Dua Lipa",
    dateStreamed: "2024-02-03",
    streamCount: 800,
    userId: "U003",
    revenueSource: "Sponsorships",
  },
  {
    id: 4,
    songName: "Bad Guy",
    artist: "Billie Eilish",
    dateStreamed: "2024-02-04",
    streamCount: 700,
    userId: "U004",
    revenueSource: "Other",
  },
  {
    id: 5,
    songName: "Peaches",
    artist: "Justin Bieber",
    dateStreamed: "2024-02-05",
    streamCount: 600,
    userId: "U005",
    revenueSource: "Subscriptions",
  },
  {
    id: 6,
    songName: "Montero",
    artist: "Lil Nas X",
    dateStreamed: "2024-02-06",
    streamCount: 750,
    userId: "U006",
    revenueSource: "Ads",
  },
  {
    id: 7,
    songName: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    dateStreamed: "2024-02-07",
    streamCount: 880,
    userId: "U007",
    revenueSource: "Sponsorships",
  },
  {
    id: 8,
    songName: "Industry Baby",
    artist: "Lil Nas X & Jack Harlow",
    dateStreamed: "2024-02-08",
    streamCount: 650,
    userId: "U008",
    revenueSource: "Ads",
  },
  {
    id: 9,
    songName: "Good 4 U",
    artist: "Olivia Rodrigo",
    dateStreamed: "2024-02-09",
    streamCount: 720,
    userId: "U009",
    revenueSource: "Subscriptions",
  },
  {
    id: 10,
    songName: "Save Your Tears",
    artist: "The Weeknd",
    dateStreamed: "2024-02-10",
    streamCount: 1100,
    userId: "U010",
    revenueSource: "Ads",
  },
  {
    id: 11,
    songName: "Drivers License",
    artist: "Olivia Rodrigo",
    dateStreamed: "2024-02-11",
    streamCount: 900,
    userId: "U011",
    revenueSource: "Sponsorships",
  },
  {
    id: 12,
    songName: "Someone You Loved",
    artist: "Lewis Capaldi",
    dateStreamed: "2024-02-12",
    streamCount: 850,
    userId: "U012",
    revenueSource: "Other",
  },
  {
    id: 13,
    songName: "Senorita",
    artist: "Shawn Mendes & Camila Cabello",
    dateStreamed: "2024-02-13",
    streamCount: 780,
    userId: "U013",
    revenueSource: "Sponsorships",
  },
  {
    id: 14,
    songName: "Happier Than Ever",
    artist: "Billie Eilish",
    dateStreamed: "2024-02-14",
    streamCount: 560,
    userId: "U014",
    revenueSource: "Sponsorships",
  },
  {
    id: 15,
    songName: "Dynamite",
    artist: "BTS",
    dateStreamed: "2024-02-15",
    streamCount: 940,
    userId: "U015",
    revenueSource: "Sponsorships",
  },
  {
    id: 16,
    songName: "Watermelon Sugar",
    artist: "Harry Styles",
    dateStreamed: "2024-02-16",
    streamCount: 880,
    userId: "U016",
    revenueSource: "Sponsorships",
  },
  {
    id: 17,
    songName: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    dateStreamed: "2024-02-17",
    streamCount: 1020,
    userId: "U017",
    revenueSource: "Subscriptions",
  },
  {
    id: 18,
    songName: "Sicko Mode",
    artist: "Travis Scott",
    dateStreamed: "2024-02-18",
    streamCount: 750,
    userId: "U018",
    revenueSource: "Ads",
  },
  {
    id: 19,
    songName: "God's Plan",
    artist: "Drake",
    dateStreamed: "2024-02-19",
    streamCount: 890,
    userId: "U019",
    revenueSource: "Sponsorships",
  },
  {
    id: 20,
    songName: "Sunflower",
    artist: "Post Malone & Swae Lee",
    dateStreamed: "2024-02-20",
    streamCount: 950,
    userId: "U020",
    revenueSource: "Other",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const selectedRevenueSource = GetRevenueSource();
  console.log("selectedRevenueSource ", selectedRevenueSource);

  const filteredRows =
    rows && selectedRevenueSource
      ? rows.filter((row) => row.revenueSource === selectedRevenueSource)
      : rows;

  return (
    <ThemeProvider theme={customTheme}>
      <Paper
        sx={{
          height: { lg: 370, xl: 400 },
          width: { xs: "100%", lg: "75%" },
          backgroundColor: "#131f4c",
        }}
      >
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
          sx={{
            "& .MuiDataGrid-root": {
              fontFamily: "Karla, sans-serif",
              border: "1px solid red",
            },
            "& .MuiDataGrid-virtualScroller": {
              overflowX: "auto",
            },
            "& .MuiDataGrid-cell": {
              borderTop: "1px solid #a9a9a994",
            },
            "& .MuiDataGrid-row": {
              color: "white", // Change all row text color
              fontSize: "0.9rem",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#131f4c",
              borderBottom: "1px solid red",
            },
            "& .MuiDataGrid-scrollbarFiller": {
              backgroundColor: "#131f4c",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              color: "white", // Header text color
              fontWeight: "normal", // Bold header text
            },
            // Styling the sort button and more options button
            "& .MuiDataGrid-sortIcon": {
              color: "white", // Change color of the sort and more options button
            },
            "& .MuiSvgIcon-fontSizeInherit": {
              color: "white",
            },
            "& .MuiSelect-icon": {
              color: "white",
            },
            "& .MuiDataGrid-filterIcon": { color: "white" },
            "& .MuiToolbar-root": {
              color: "white",
            },
          }}
        />
      </Paper>
    </ThemeProvider>
  );
}
