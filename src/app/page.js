"use client";

import { useAppContext } from "@/context/app";
import { withAccessControl } from "@/hoc/auth";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HomePage = (props) => {
  const { setLoading, mounted } = useAppContext();
  const pathname = usePathname();
  console.log("props", props);

  useEffect(() => {
    setLoading(!mounted);
  }, [mounted, setLoading]);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography>Home Page</Typography>
    </Box>
  );
};

export default withAccessControl(HomePage, ["admin"]);
