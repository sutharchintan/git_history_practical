import { useTheme, useMediaQuery } from "@material-ui/core";

/**
 * export const for small device
 * @returns
 */
export const isSmallDevice = () => {
  const theme = useTheme();
  return useMediaQuery(
    theme.breakpoints.down("sm") || theme.breakpoints.down("xs")
  );
};
