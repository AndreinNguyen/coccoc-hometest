import { Tick } from "@coccoc-hometest/shared/components";
import {
  getItemLocalStorage,
  LOCAL_STORAGE_ITEMS,
} from "@coccoc-hometest/shared/config";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  const [name, setName] = useState("");

  useEffect(() => {
    const _name = getItemLocalStorage(LOCAL_STORAGE_ITEMS.name) ?? "";
    setName(_name);

    return () => {
      setName("");
    };
  }, []);

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
        <Typography>Welcome {name}, you have logged in successfully</Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
