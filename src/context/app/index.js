"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    setMounted(!!pathname);
    setLoading(true);
  }, [pathname]);

  useEffect(() => {
    //
    console.log("router", router);
  }, [router]);

  const contextValues = {
    // vars
    mounted,
    loading,
    drawerOpen,

    // FNs
    setMounted,
    setLoading,
    toggleDrawer,
    setDrawerOpen,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
