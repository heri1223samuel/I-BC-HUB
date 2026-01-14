import { Typography } from "@mui/material";

export function Signin() {
  return (
    // <>
    //   <div className="bg-gradient-to-r from-red-600 to-red-800">
    //     <h2>Avia</h2>
    //   </div>
    // </>
    <div
      style={{
        background: `linear-gradient(to right , #A82A38, #291632 )`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Typography sx={{ fontSize: "20px", color: "white" }}>
          Welcome on I-BC Hub
        </Typography>
      </div>
    </div>
  );
}
