import { Box, Typography } from "@mui/material";
import "../index.css";
export const Heading = () => {
  return (
    <Box paddingLeft={3}>
      <Typography
        variant="h1"
        fontWeight="bold"
        color="#734967"
        fontFamily="Great Vibes"
      >
        Jigar
      </Typography>
      <Typography
        color="#734967"
        variant="h1"
        fontWeight="bold"
        paddingLeft={3}
      >
        ♥
      </Typography>
      <Typography
        variant="h1"
        fontWeight="bold"
        color="#734967"
        fontFamily="Great Vibes"
      >
        Krupali
      </Typography>
    </Box>
  );
};
