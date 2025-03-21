"use client";

import LogoComponent from "@/components/images/logo";
/* eslint-disable react-hooks/exhaustive-deps */
import { COLORS } from "@/constants/system";
import { useAppContext } from "@/context/app";
import { getStyles } from "@/utils/app/styles/auth/login";
import { LOGIN_VALIDATION_SCHEMA } from "@/utils/validation/auth/login";
import { MoreHoriz, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFormik } from "formik";
import { isMobile } from "mobile-device-detect";
import { useState } from "react";

const LoginFormComponent = ({ handleOnSubmit = () => {} }) => {
  const { vpWidth } = useAppContext();

  const styles = getStyles({ isMobile, vpWidth, COLORS });

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LOGIN_VALIDATION_SCHEMA,
    onSubmit: (values, { resetForm }) => {
      handleOnSubmit(values);
      resetForm();
    },
  });

  return (
    <Box sx={{}}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.logoContainer}>
          <LogoComponent />
        </Box>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack direction={"row"} sx={{ alignItems: "center" }}>
              <TextField
                fullWidth
                label={
                  <Stack direction={"row"}>
                    <Typography>Username</Typography>
                    <Typography color={"error"}>*</Typography>
                  </Stack>
                }
                name="username"
                size="small"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                autoComplete="off"
                type="email"
                helperText={
                  <Typography variant="caption" fontSize={8}>
                    {formik.touched.username && formik.errors.username}
                  </Typography>
                }
              />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack direction={"column"} sx={{ alignItems: "center" }}>
              <TextField
                fullWidth
                label={
                  <Stack direction={"row"}>
                    <Typography>Password</Typography>
                    <Typography color={"error"}>*</Typography>
                  </Stack>
                }
                name="password"
                size="small"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                helperText={
                  <Typography variant="caption" fontSize={8}>
                    {formik.touched.password && formik.errors.password}
                  </Typography>
                }
              />
            </Stack>

            <Divider>
              {" "}
              <Typography variant="caption" sx={[styles.passwordSecurityAlert]}>
                Security: Never share your password
              </Typography>
              <IconButton
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? (
                  <VisibilityOff color="error" />
                ) : (
                  <Visibility color="success" />
                )}
              </IconButton>
            </Divider>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={styles.submitButtonContainer}>
              <Button
                variant="contained"
                size="small"
                sx={styles.submitButton}
                type="submit"
                loading
              >
                Submit
              </Button>
            </Box>

            <Divider>
              <IconButton>
                <MoreHoriz fontSize="large" />
              </IconButton>
            </Divider>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default LoginFormComponent;
