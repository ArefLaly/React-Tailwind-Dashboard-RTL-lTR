import { createContext } from "react";
import { AppService } from "../../data/services/app.service";
type httpServiceContextProps = {
  service: AppService;
};
export const HttpContext = createContext<httpServiceContextProps>(
  {} as httpServiceContextProps
);
