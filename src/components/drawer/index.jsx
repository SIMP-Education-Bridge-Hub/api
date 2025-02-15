"use client";

import { useEffect, useState } from "react";
import { COLORS } from "@/constants/system";
import { drawerRoutes } from "@/constants/ui/drawer";
import { useAppContext } from "@/context/app";
import { Close } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import { usePathname, useRouter } from "next/navigation";

const DrawerComponent = () => {
  const pathName = usePathname();
  const navigationRouter = useRouter();

  const theme = useTheme();
  const { drawerOpen, toggleDrawer, mounted, loading } = useAppContext();

  const handleNavigation = (to) => {
    if (loading) {
      toggleDrawer();
    }
    navigationRouter.replace(to);
  };

  useEffect(() => {
    console.log("pathName", pathName);
  }, [pathName]);

  return (
    mounted && (
      <Drawer
        sx={{
          width: drawerOpen ? "15vw" : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: { xs: "75vw", sm: "30vw", lg: "15vw" },
            bgcolor: COLORS.BACKGROUND,
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <Image src={Logo} alt="Intra Nav Logo" />

        <Box sx={{ position: "absolute", width: "100%", textAlign: "right" }}>
          <Tooltip title="Close drawer" placement="bottom">
            <IconButton sx={{ color: "white", m: 1 }} onClick={toggleDrawer}>
              <Close />
            </IconButton>
          </Tooltip>
        </Box>

        <Divider />

        <List sx={{ px: 1 }}>
          {(drawerRoutes ?? []).map((r, index) => {
            let active = r?.path === pathName;

            return Object.keys(r).length ? (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  borderRadius: 1,
                  mb: 1,
                  bgcolor: `${COLORS[active ? "PRIMARY" : ""]}`,
                  color: `${COLORS[active ? "WHITE" : ""]}`,
                  borderBottom: active ? `3px solid ${COLORS.WHITE}` : null,
                }}
              >
                <ListItemButton
                  sx={{
                    pointerEvents: active ? "none" : "",
                    py: 0.1,
                  }}
                  onClick={() => handleNavigation(r?.path)}
                >
                  {r?.icon}
                  <ListItemText
                    sx={{ pl: 1 }}
                    primary={r.title}
                    style={{ fontSize: "10px" }}
                  />
                </ListItemButton>
              </ListItem>
            ) : null;
          })}
        </List>
      </Drawer>
    )
  );
};

export default DrawerComponent;
