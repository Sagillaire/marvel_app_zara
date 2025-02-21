import { ReactNode } from "react";
import { GeneralContainer } from "../GlobalStyles";

const GeneralContainerComponent = ({ children }: { children: ReactNode }) => {
  return <GeneralContainer>{children}</GeneralContainer>;
};

export default GeneralContainerComponent;
