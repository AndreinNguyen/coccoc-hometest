import { Tick } from "@coccoc-hometest/shared/components";
import { Box, Typography } from "@mui/material";
import { useCookies } from "react-cookie";

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  const [cookies] = useCookies(["name"]);

  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      minHeight="100vh"
    >
      <Box
        border={"1px solid"}
        borderColor={"secondary.main"}
        display={"flex"}
        width={400}
        padding={1}
        alignItems="center"
      >
        <Tick color="secondary" />
        <Typography>
          Welcome {cookies?.name}, you have logged in successfully
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
