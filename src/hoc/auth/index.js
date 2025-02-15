"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AccessDeniedComponent from "@/components/auth/access-denied";
import { CircleLoader } from "react-spinners";

export const withAccessControl = (Page, userRoles = []) => {
  const ControlledPage = () => {
    const pathname = usePathname();
    const [isAuth, setIsAuth] = useState(null); // Initial state as null to prevent flickering

    // Simulated user object
    const dummyUser = {
      name: "John",
      surname: "Doe",
      role: "admin",
    };

    useEffect(() => {
      console.log("HOC says HI!!!");
      setIsAuth(userRoles.length === 0 || userRoles.includes(dummyUser.role));
    }, [pathname, dummyUser.role]);

    if (isAuth === null) return <div>Loading...</div>;

    // <CircleLoader />;

    return isAuth ? (
      <Page data={{ val: "testVal" }} />
    ) : (
      <AccessDeniedComponent />
    );
  };

  return ControlledPage;
};
