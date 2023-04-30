import { Box, Typography } from "@mui/material";
import heart from "../assets/heart.png";
import "../index.css";

export const Heading = () => {
  return (
    <Box paddingLeft={3}>
      <Typography
        variant="h1"
        color="#734967"
        fontFamily="Great Vibes"
        marginBottom={1}
        sx={{
          textShadow: "2px 6px 5px #c5c5c5",
        }}
      >
        Jigar
      </Typography>
      <img src={heart} alt="heart" style={{ marginLeft: 80 }} />
      <Typography
        variant="h1"
        color="#734967"
        fontFamily="Great Vibes"
        marginTop={1}
        sx={{
          textShadow: "2px 6px 5px #c5c5c5",
        }}
      >
        Krupali
      </Typography>
    </Box>
  );
};
