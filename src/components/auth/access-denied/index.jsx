"use client";

import { COLORS } from "@/constants/system";
import { Warning } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const AccessDeniedComponent = () => {
  return (
    <Box sx={{ textAlign: "center", pt: "25vh" }}>
      <Warning color="warning" />
      <Typography variant="subtitle2" sx={{ color: COLORS.PRIMARY }}>
        Access denied. Contact system administrator
      </Typography>
    </Box>
  );
};

export default AccessDeniedComponent;
