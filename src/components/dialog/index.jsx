"use client";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import * as React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogComponent({
  children,
  open = false,
  title = "No title",
  fullWidth = false,
  fullScreen = false,
}) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        fullWidth={fullWidth}
        fullScreen={fullScreen}
      >
        <DialogTitle align="center">{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
