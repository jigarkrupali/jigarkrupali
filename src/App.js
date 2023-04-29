import { Box } from "@mui/material";
import { useState } from "react";
import { animated, useSpring } from "react-spring";
import "./App.css";
import fm from "./assets/FM.jpg";
import CountdownTimer from "./components/CountdownTimer";
import LogoAnimation from "./components/LogoAnimation";

function App() {
  const [doShowMainScreen, setDoShowMainScreen] = useState(false);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: 1000,
    onStart: () => setDoShowMainScreen(true),
  });
  return (
    <Box>
      <Box position="absolute" top={0} left={0}>
        <LogoAnimation />
      </Box>
      {doShowMainScreen && (
        <animated.div style={fadeIn}>
          <Box
            sx={{
              backgroundImage: `url(${fm})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "100vh",
              alignItems: "flex-end",
              display: "flex",
            }}
          >
            <CountdownTimer />
          </Box>
        </animated.div>
      )}
    </Box>
  );
}

export default App;
