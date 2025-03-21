"use client";

import PageHeaderComponent from "@/components/page/header";
import TableComponent from "@/components/table";
import { columns } from "@/components/table/columns/tokens";
import rows from "@/components/table/rows/tokens";
import { useAppContext } from "@/context/app";
import { withAccessControl } from "@/hoc/auth";
import { Add } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TokensPage = ({ props }) => {
  const { mounted, setLoading } = useAppContext();
  const pathname = usePathname();

  const theme = useTheme();
  const toolbarHeight = theme.spacing(15);

  const [enrol, setEnrol] = useState(false);

  const handleCallBack = (callBack) => {
    console.log("CallBack", callBack);
  };

  useEffect(() => {
    setLoading(!mounted);
  }, [mounted, setLoading]);

  return (
    <Box sx={{ height: `calc(100vh - ${toolbarHeight})` }}>
      <PageHeaderComponent
        title={"Tokens Management"}
        actions={[{ id: "enrol", icon: <Add />, title: "New Token" }]}
        handleCallBack={handleCallBack}
      />
      <TableComponent columns={columns} rows={rows} />
    </Box>
  );
};

export default withAccessControl(TokensPage, []);
