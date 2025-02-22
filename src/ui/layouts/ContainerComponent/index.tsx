import { ReactNode } from "react";
import { GeneralContainer } from "../../styles/GlobalStyles";

const GeneralContainerComponent = ({ children }: { children: ReactNode }) => {
  return <GeneralContainer>{children}</GeneralContainer>;
};

export default GeneralContainerComponent;
