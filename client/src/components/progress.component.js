import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularColor() {
    const styles={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    };
  return (
    <div
      style={styles}
    >
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="inherit" />
      </Stack>
    </div>
  );
}
