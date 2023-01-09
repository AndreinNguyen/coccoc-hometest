import { SvgIconProps, Box, IconButton, SvgIcon } from "@mui/material";
import {
  CheckboxBlankSvg,
  CheckboxChecked,
} from "@coccoc-hometest/shared/assets";

/* eslint-disable-next-line */
export interface CheckboxProps extends SvgIconProps {
  isChecked: boolean;
  setIsChecked: (arg: boolean) => void;
}

export function Checkbox(props: CheckboxProps) {
  const { isChecked, setIsChecked, ...rest } = props;

  const onChange = () => setIsChecked(!isChecked);

  return (
    <Box sx={{ marginLeft: -1 }}>
      <IconButton onClick={onChange}>
        {!isChecked ? (
          <SvgIcon component={CheckboxBlankSvg} inheritViewBox {...rest} />
        ) : (
          <SvgIcon
            color="secondary"
            component={CheckboxChecked}
            {...rest}
            inheritViewBox
          />
        )}
      </IconButton>
    </Box>
  );
}

export default Checkbox;
