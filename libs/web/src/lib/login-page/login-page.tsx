import {
  FormInput,
  Eye,
  CautionCircle,
  Checkbox,
} from "@coccoc-hometest/shared/components";
import { AuthService } from "@coccoc-hometest/shared/services";
import {
  Box,
  Paper,
  Typography,
  Link,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
  LinearProgress,
} from "@mui/material";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

/* eslint-disable-next-line */
export interface LoginPageProps {}

interface IForm {
  email: string;
  password: string;
}

export function LoginPage(props: LoginPageProps) {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([
    "email",
    "password",
    "name",
    "accessToken",
  ]);

  const {
    handleSubmit,
    control,
    formState: { isValid },
    setFocus,
    resetField,
  } = useForm({
    defaultValues: {
      email: cookies.email,
      password: cookies.password,
    },
    mode: "all",
  });

  const onSubmit = async (data: IForm) => {
    try {
      setIsProcessing(true);
      setError("");
      if (isRememberMe) {
        setCookie("email", data.email);
        setCookie("password", data.password);
      }
      const res = await AuthService.login(data.email, data.password);
      setCookie("name", res.data.name);
      setCookie("accessToken", res.data.accessToken);

      navigate("/home");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error[0].msg);
      resetField("password", {
        defaultValue: "",
      });
      setFocus("password");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper
          elevation={24}
          sx={{
            width: 400,
            position: "relative",
            overflow: "hidden",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            opacity: isProcessing ? 0.8 : 1,
            pointerEvents: isProcessing ? "none" : "initial",
          }}
        >
          {isProcessing && (
            <Box
              sx={{
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                "& .MuiLinearProgress-bar": {
                  animationDuration: "2s",
                },
              }}
            >
              <LinearProgress color="secondary" />
            </Box>
          )}
          <Typography variant="h4" fontWeight={600}>
            Login
          </Typography>
          <Typography variant="inherit">
            Do not have an account?{" "}
            <Link sx={{ fontWeight: 500 }} color="secondary" href="/">
              Sign up here
            </Link>
          </Typography>

          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel>Email</FormLabel>
              <FormInput
                control={control}
                rules={{
                  required: true,
                }}
                name="email"
                variant="outlined"
                color="secondary"
                placeholder="email@example.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <FormInput
                control={control}
                name="password"
                rules={{
                  required: true,
                }}
                variant="outlined"
                color="secondary"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <Eye
                      color={showPassword ? "secondary" : "disabled"}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ),
                }}
              />
            </FormControl>

            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Box display={"flex"} alignItems="center">
                <Checkbox
                  fontSize="small"
                  isChecked={isRememberMe}
                  setIsChecked={setIsRememberMe}
                />
                <Typography>Remember my account</Typography>
              </Box>
              <Link sx={{ fontWeight: 500 }} color="secondary" href="/">
                Forgot password?
              </Link>
            </Box>
            {!!error && (
              <Box ml={1} mt={-1} display={"flex"} alignItems="center">
                <CautionCircle color="error" />
                <Typography
                  alignItems={"center"}
                  fontSize={12}
                  ml={0.5}
                  mt={0.4}
                  color={"error"}
                >
                  {error}
                </Typography>
              </Box>
            )}
            {!isProcessing ? (
              <Button
                sx={{ width: "30px", fontWeight: 600 }}
                size="small"
                color="secondary"
                variant="contained"
                type="submit"
                disabled={!isValid}
              >
                Login
              </Button>
            ) : (
              <Typography color="secondary.main" ml={2} fontWeight={600}>
                PROCESSING...
              </Typography>
            )}
          </FormGroup>
        </Paper>
      </form>
    </Box>
  );
}

export default LoginPage;
