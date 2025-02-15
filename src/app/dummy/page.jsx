"use client";

import React, { useEffect } from "react";
import { useAppContext } from "@/context/app";
import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";

const DummyPage = ({ props }) => {
  const { setLoading, mounted } = useAppContext();
  const pathname = usePathname();

  console.log("props", props);

  useEffect(() => {
    setLoading(!mounted);
  }, [mounted, setLoading]);

  return (
    <Box>
      <Typography></Typography>
    </Box>
  );
};

export default DummyPage;
