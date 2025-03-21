"use client";

import AppBarComponent from "@/components/app-bar";
import DrawerComponent from "@/components/drawer";
import SpinnerComponent from "@/components/spinner";
import { useAuthContext } from "@/context/auth";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import React from "react";

const LayoutComponent = ({ children }) => {
  const { isAuthRoute } = useAuthContext();

  if (isAuthRoute===null) return;

  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "white" }}>
      {isAuthRoute ? (
        children
      ) : (
        <>
          <AppBarComponent />
          <div style={{ display: "flex", flexGrow: 1 }}>
            <DrawerComponent />
            <div style={{ flexGrow: 1, padding: 20 }}>
              <Toolbar />
              {children}
            </div>
          </div>
        </>
      )}

      <SpinnerComponent />
    </Box>
  );
};

export default LayoutComponent;
