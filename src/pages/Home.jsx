import { Box, CssBaseline, ThemeProvider } from "@mui/material";
// @ts-ignore
import Header1 from "../components/header/Header1";
// @ts-ignore
import Header2 from "../components/header/Header2";
import { ColorModeContext, useMode } from "../../theme";
import Hero from "../components/hero/hero";
import Main from "../components/main/maincontent";
import Scrolltotop from "../components/scroll/Scrolltotop";

function Home() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bgbody.main
          }
        >
          <Scrolltotop />
          <Hero />
          <Main />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Home;
