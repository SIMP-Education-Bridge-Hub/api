"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/app";
import { usePathname } from "next/navigation";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { withAccessControl } from "@/hoc/auth";
import TableComponent from "@/components/table";
import PageHeaderComponent from "@/components/page/header";
import { PersonAdd, SensorOccupied } from "@mui/icons-material";
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
    { id: "name", label: "Name", minWidth: 170 },

    { id: "role", label: "Role", minWidth: 100 },
    {
      id: "grade",
      label: "Grade",
    },
    {
      id: "age",
      label: "Age",
    },
    {
      id: "gender",
      label: "Gender",
    },
    {
      id: "joinDate",
      label: "Join Date",
    },
    {
      id: "status",
      label: "Status",
    },
  ];

  function createData(name, role, grade, age, gender, joinDate, status) {
    return { name, role, grade, age, gender, joinDate, status };
  }

  const tableRows = [
    createData("John", "Teacher", 10, 15, "Male", "2023-01-10", "active"),
    createData("Jane", "Guardian", 9, 14, "Female", "2022-09-15", "suspended"),
    createData("Jane", "Learner", 9, 14, "Female", "2022-09-15", "suspended"),
    createData("Jane", "Principal", 9, 14, "Female", "2022-09-15", "suspended"),
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
            title={"Users Management"}
            actions={[{ id: "enrol", icon: <PersonAdd />, title: "New User" }]}
            handleCallBack={handleCallBack}
          />
          <TableComponent columns={tableColumns} rows={tableRows} />
        </>
      )}
    </Box>
  );
};

export default withAccessControl(UsersPage, []);
