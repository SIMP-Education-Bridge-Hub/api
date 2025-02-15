import { Dashboard, GroupRounded, Message } from "@mui/icons-material";

const iconProps = {
  fontSize: 15,
};

export const drawerRoutes = [
  {
    title: "Dashboard",
    path: "/",
    icon: <Dashboard sx={{ ...iconProps }} />,
  },

  {
    title: "Dummy",
    path: "/dummy",
    icon: <Message sx={{ ...iconProps }} />,
  },
];
