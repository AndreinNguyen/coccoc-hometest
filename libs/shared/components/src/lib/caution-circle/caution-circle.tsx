import { CautionCircleSvg } from "@coccoc-hometest/shared/assets";
import { SvgIconProps, Box, IconButton, SvgIcon } from "@mui/material";

/* eslint-disable-next-line */
export interface CautionCircleProps extends SvgIconProps {}

export function CautionCircle(props: CautionCircleProps) {
  return (
    <Box sx={{ marginLeft: -1 }}>
      <IconButton sx={{ padding: 0 }}>
        <SvgIcon
          sx={{ fontSize: 12 }}
          {...props}
          component={CautionCircleSvg}
          inheritViewBox
        />
      </IconButton>
    </Box>
  );
}

export default CautionCircle;
