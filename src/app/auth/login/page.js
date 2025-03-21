"use client";

import LoginFormComponent from "@/components/form/auth/login";
import { useAppContext } from "@/context/app";
import { withAccessControl } from "@/hoc/auth";
import { getStyles } from "@/utils/app/styles/auth/login";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { isMobile } from "mobile-device-detect";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { COLORS } from "@/constants/system";
import { Person } from "@mui/icons-material";

const LoginPage = (props) => {
  const { setLoading, mounted, vpWidth } = useAppContext();
  const styles = getStyles({ isMobile, vpWidth, COLORS });
  const pathname = usePathname();
  console.log("props", props);

  useEffect(() => {
    setLoading(!mounted);
  }, [mounted, setLoading]);

  const handleOnSubmit = async () => {
    //
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="caption" sx={styles.loginTitle}>
        User Login
      </Typography>
      <Paper elevation={20} sx={[styles.formContainer]}>
        <LoginFormComponent handleOnSubmit={handleOnSubmit} />
      </Paper>
    </Box>
  );
};

export default withAccessControl(LoginPage);
