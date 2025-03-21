"use client";

import { COLORS } from "@/constants/system";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const PageHeaderComponent = ({
  title,
  actions = [],
  handleCallBack = () => {},
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mb: 5,
      }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1, color: COLORS.PRIMARY }}>
        {title}
      </Typography>

      <Stack direction={"row"} spacing={1}>
        {actions.map((action) => (
          <Button
            startIcon={action.icon}
            key={action.id}
            variant="contained"
            size="small"
            sx={{ bgcolor: COLORS.PRIMARY }}
            onClick={() => {
              handleCallBack(action.id);
            }}
          >
            {action.title}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default PageHeaderComponent;
