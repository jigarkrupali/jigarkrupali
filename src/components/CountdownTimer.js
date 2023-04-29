import { Grid, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2023-05-07T09:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const newDays = Math.floor(
        distance / (1000 * 60 * 60 * 24)
      ).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

      const newHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

      const newMinutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      ).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

      const newSeconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      ).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    };

    updateTimer();

    const timerInterval = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const blocks = useMemo(
    () => [
      { label: "Days", value: days },
      { label: "Hours", value: hours },
      { label: "Minutes", value: minutes },
      { label: "Seconds", value: seconds },
    ],
    [days, hours, minutes, seconds]
  );

  return (
    <Grid container xs={12} justifyContent="space-around" marginY={2}>
      {blocks.map((block) => (
        <Grid
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(7px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
          item
          xs={2.5}
          color="white"
          borderRadius={3}
        >
          <Typography
            textAlign="center"
            variant="h3"
            marginTop={3}
            marginBottom={1}
          >
            {block.value}
          </Typography>
          <Typography
            textAlign="center"
            variant="subtitle1"
            marginBottom={1}
            fontWeight="500"
          >
            {block.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default CountdownTimer;
