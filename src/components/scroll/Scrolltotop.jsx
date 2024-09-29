import { KeyboardArrowUp } from '@mui/icons-material'
import { Box, Fab, useScrollTrigger, Zoom } from '@mui/material'
import React, { useCallback } from 'react'

export default function Scrolltotop() {
  const trigger = useScrollTrigger({
    threshold: 100,
  })

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  return (
<Zoom in={trigger}>
      <Box
        role="presentation"
        // Place the button in the bottom right corner.
        sx={{
          position: "fixed",
          bottom: 42,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="error"
          size="small"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>  )
}
