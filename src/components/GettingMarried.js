import { Box, Typography } from "@mui/material";
import "../index.css";
export const GettingMarried = () => {
  return (
    <Box
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
      <Typography
        variant="h4"
        color="#734967"
        fontFamily="Great Vibes"
        paddingLeft={2}
      >
        We are thrilled to invite you to celebrate the joyous union of{" "}
        <strong>Jigar</strong> and <strong>Krupali</strong>.
      </Typography>
    </Box>
  );
};
