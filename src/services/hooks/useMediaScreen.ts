import { Breakpoint, Theme, useMediaQuery } from "@mui/material";

export default function useMediaScreen(width: Breakpoint) {
  const screen = useMediaQuery((theme: Theme) => theme.breakpoints.up(width));

  return screen;
}
