import { Grid, Typography } from "@mui/material";

export const Venue = () => {
  return (
    <Grid
      sx={{
        background: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(4px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: 4,
        marginX: 2,
        padding: 2,
      }}
    >
      <Grid item>
        <Typography textAlign="center" variant="h5">
          May
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        marginY={1}
      >
        <Typography variant="h5">Sunday</Typography>
        <Typography
          borderLeft={1}
          borderRight={1}
          marginX={1}
          paddingX={1}
          fontWeight="bold"
          variant="h4"
        >
          07
        </Typography>
        <Typography variant="h5">9:00 am</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" textAlign="center">
          2023
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" textAlign="center" marginTop={2}>
          Mendarda
        </Typography>
      </Grid>
    </Grid>
  );
};
<strong></strong>;
