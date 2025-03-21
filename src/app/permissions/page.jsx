"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/app";
import { usePathname } from "next/navigation";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { withAccessControl } from "@/hoc/auth";
import TableComponent from "@/components/table";
import PageHeaderComponent from "@/components/page/header";
import { PersonAdd, School, SensorOccupied } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { COLORS } from "@/constants/system";
import DialogComponent from "@/components/dialog";

const UsersPage = ({ props }) => {
  const { mounted, setLoading } = useAppContext();
  const pathname = usePathname();

  const theme = useTheme();
  const toolbarHeight = theme.spacing(15);

  const [enrol, setEnrol] = useState(false);

  console.log("props", props);

  const enrolledLearners = [];

  const tableColumns = [
    {
      id: "name",
      label: "Name",
    },
    {
      id: "principal",
      label: "Principal",
    },

    {
      id: "address",
      label: "Address",
    },
    {
      id: "phone",
      label: "Phone",
    },
    {
      id: "email",
      label: "Email",
    },
    {
      id: "capacity",
      label: "Capacity",
    },
    {
      id: "addDate",
      label: "Add Date",
    },
    {
      id: "grades",
      label: "Grades",
    },
    {
      id: "status",
      label: "Status",
    },
  ];

  function createData(
    name,
    principal,
    address,
    phone,
    email,
    capacity,
    addDate,
    grades,
    status
  ) {
    return {
      name,
      principal,
      address,
      phone,
      email,
      capacity,
      addDate,
      grades,
      status,
    };
  }

  const tableRows = [
    createData(
      "Itsoseng Combined",
      "Prince 1",
      "Phase 3",
      "011 419 4768",
      "itsoseng-combined-school@simp.co.za",
      500,
      "01/01/2024",
      "Grade 8-12",
      "active"
    ),
    createData(
      "Madiba Utlwa Primary",
      "Prince 4",
      "Phase 2",
      "011 580 7306",
      "madiba-utlwa-primary-school@simp.co.za",
      200,
      "01/01/2024",
      "Grade 0-7",
      "suspended"
    ),
  ];

  const handleCallBack = (callBack) => {
    console.log("CallBack", callBack);
  };

  useEffect(() => {
    setLoading(!mounted);
  }, [mounted, setLoading]);

  return (
    <Box sx={{ height: `calc(100vh - ${toolbarHeight})` }}>
      {enrolledLearners.length ? (
        <Box
          sx={{
            height: `calc(100vh - ${toolbarHeight})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>You don't have any child enrolled</Typography>

          <SensorOccupied fontSize="large" sx={{ my: 5 }} />

          <Button
            sx={{ bgcolor: COLORS.PRIMARY }}
            variant="contained"
            size="small"
            onClick={() => setEnrol(true)}
          >
            Enrol Child
          </Button>

          <DialogComponent
            open={enrol}
            title={"Learner Enrolment Form"}
            fullWidth={true}
          >
            <EnrolLearnerStepperComponent />
          </DialogComponent>
        </Box>
      ) : (
        <>
          <PageHeaderComponent
            title={"Permissions Management"}
            actions={[{ id: "enrol", icon: <School />, title: "New School" }]}
            handleCallBack={handleCallBack}
          />
          <TableComponent columns={tableColumns} rows={tableRows} />
        </>
      )}
    </Box>
  );
};

export default withAccessControl(UsersPage, []);
