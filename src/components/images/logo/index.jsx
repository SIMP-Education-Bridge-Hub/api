"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import { useAppContext } from "@/context/app";
import { isMobile } from "mobile-device-detect";

const LogoComponent = () => {
  const { vpWidth } = useAppContext();
  const logoSize = vpWidth * (isMobile ? 0.3 : 0.2);

  return (
    <Image
      src={Logo}
      width={logoSize}
      height={logoSize}
      alt="SIMP Education Bridge Hub"
      style={{ width: "auto", height: "auto" }}
      priority
    />
  );
};

export default LogoComponent;
