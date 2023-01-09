import { EyeSvg } from "@coccoc-hometest/shared/assets";
import { Box, IconButton, SvgIcon, SvgIconProps } from "@mui/material";

export interface EyeProps extends SvgIconProps {
  onClick: () => void;
}

export function Eye(props: EyeProps) {
  const { onClick, ...rest } = props;

  return (
    <Box sx={{ marginLeft: -1 }}>
      <IconButton onClick={onClick}>
        <SvgIcon {...rest} component={EyeSvg} inheritViewBox />
      </IconButton>
    </Box>
  );
}

export default EyeSvg;
