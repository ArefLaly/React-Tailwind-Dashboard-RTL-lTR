import { createContext } from "react";
type LayoutContextType = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  mobileSize: boolean;
  setMobileSize: (value: boolean) => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LayoutContext = createContext<LayoutContextType>(
  {} as LayoutContextType
);
