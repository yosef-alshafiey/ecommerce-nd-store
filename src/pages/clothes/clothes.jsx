import React, { Suspense } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../../theme";
// @ts-ignore
const Header1 = React.memo(React.lazy(() => import("../../components/header/Header1")));
// @ts-ignore
const Header2 = React.memo(React.lazy(() => import("../../components/header/Header2")));
const Main = React.memo(React.lazy(() => import("../../components/main/maincontent")));
const Scrolltotop = React.memo(React.lazy(() => import("../../components/scroll/Scrolltotop")));
// @ts-ignore
const ClothesProducts = React.memo(React.lazy(() => import("./clothesProducts")));

function Headphone() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Header1 />
          <Header2 />
          <Box bgcolor={theme.palette.bgbody.main}>
            <Scrolltotop />
            <ClothesProducts />
          </Box>
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Headphone;
