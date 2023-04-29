import { Box } from "@mui/material";
import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import logo from "../assets/kj_logo.png";

const LogoAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadeIn, setIsFadeIn] = useState(true);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "scale(0)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 1000 },
    onRest: () => setIsFadeIn(false),
  });

  const fadeOut = useSpring({
    from: { opacity: 1, transform: "scale(1)" },
    to: { opacity: 0, transform: "scale(2)" },
    config: { duration: 1000 },
    delay: 1000,
    onRest: () => setIsVisible(false),
  });

  return (
    <>
      {isVisible && (
        <animated.div style={isFadeIn ? fadeIn : fadeOut}>
          <Box
            display="flex"
            height="100vh"
            alignItems="center"
            style={isFadeIn ? fadeIn : fadeOut}
          >
            <img src={logo} alt="Logo" width="100%" />
          </Box>
        </animated.div>
      )}
    </>
  );
};

export default LogoAnimation;
