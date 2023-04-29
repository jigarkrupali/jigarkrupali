import { Box } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import Image1 from "./assets/FM1.jpg";
import Image2 from "./assets/FM2.jpg";
import Image3 from "./assets/FM5.jpg";
import CountdownTimer from "./components/CountdownTimer";
import { GettingMarried } from "./components/GettingMarried";
import { Heading } from "./components/Heading";
import { Invitation } from "./components/Invitation";
import LogoAnimation from "./components/LogoAnimation";
import { Venue } from "./components/Venue";

function App() {
  const [doShowMainScreen, setDoShowMainScreen] = useState(false);

  const parallax = useRef(null);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: 1000,
    onStart: () => setDoShowMainScreen(true),
  });
  return (
    <>
      <Box position="absolute" top={0} left={0}>
        <LogoAnimation />
      </Box>
      {doShowMainScreen && (
        <animated.div style={fadeIn}>
          <Parallax
            ref={parallax}
            pages={3}
            style={{ backgroundColor: "#F8EEFC" }}
          >
            <ParallaxLayer
              offset={0}
              speed={1}
              style={{
                backgroundImage: `url(${Image3})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            />
            <ParallaxLayer
              offset={1}
              speed={1}
              style={{
                backgroundImage: `url(${Image2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            />
            <ParallaxLayer
              offset={2}
              speed={1}
              style={{
                backgroundImage: `url(${Image1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                display: "flex",
              }}
            />

            <ParallaxLayer offset={0.025} speed={0.1}>
              <Heading />
            </ParallaxLayer>

            <ParallaxLayer offset={0.75} speed={0.2}>
              <GettingMarried />
            </ParallaxLayer>

            <ParallaxLayer offset={0.99} speed={0.15}>
              <Invitation />
            </ParallaxLayer>

            <ParallaxLayer offset={1.9} speed={0.2}>
              <Venue />
            </ParallaxLayer>

            <ParallaxLayer offset={2.1} speed={0.5}>
              <CountdownTimer />
            </ParallaxLayer>
          </Parallax>
        </animated.div>
      )}
    </>
  );
}

export default App;
