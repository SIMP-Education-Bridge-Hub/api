"use client";

import React from "react";
import { COLORS } from "@/constants/system";
import { Backdrop, Box } from "@mui/material";
import { CircleLoader } from "react-spinners";
import { useAppContext } from "@/context/app";

const SpinnerComponent = () => {
  const { loading } = useAppContext();

  return (
    
    loading && (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999,
        }}
      >
        <Backdrop
          open={loading}
          color="red"
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        >
          <CircleLoader loading={loading} color={COLORS.WHITE} size={250} />
        </Backdrop>
      </Box>
    )
  );
};

export default SpinnerComponent;
