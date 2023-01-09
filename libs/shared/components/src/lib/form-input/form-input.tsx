import { TextFieldProps, TextField, Box, Typography } from "@mui/material";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import CautionCircle from "../caution-circle/caution-circle";

/* eslint-disable-next-line */
export type FormInputProps<T extends FieldValues> = UseControllerProps<T> &
  TextFieldProps;

export function FormInput<T extends FieldValues>(props: FormInputProps<T>) {
  const {
    control,
    name,
    InputProps,
    type,
    variant,
    color,
    placeholder,
    rules,
    ...rest
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      {...rest}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={
            error ? (
              <Box display={"flex"} alignItems="center">
                <CautionCircle color="error" />
                <Typography
                  alignItems={"center"}
                  fontSize={12}
                  ml={0.5}
                  mt={0.4}
                >
                  Require
                </Typography>
              </Box>
            ) : null
          }
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          type={type}
          variant={variant ?? "standard"}
          color={color ?? "primary"}
          placeholder={placeholder}
          InputProps={InputProps}
        />
      )}
    />
  );
}

export default FormInput;
