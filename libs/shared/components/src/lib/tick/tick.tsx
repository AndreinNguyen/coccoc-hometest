import { Box, IconButton, SvgIcon, SvgIconProps } from "@mui/material";
import { TickSvg } from "@coccoc-hometest/shared/assets";

/* eslint-disable-next-line */
export interface TickProps extends SvgIconProps {}

export function Tick(props: TickProps) {
  return (
    <Box sx={{ marginLeft: -1 }}>
      <IconButton>
        <SvgIcon {...props} component={TickSvg} inheritViewBox />
      </IconButton>
    </Box>
  );
}

export default Tick;
