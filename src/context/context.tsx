import { ReactNode, createContext, useState } from "react";

type IContext = {
  showContent: boolean;
  setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Context = createContext<IContext>({} as IContext);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [showContent, setShowContent] = useState(true);

  return <Context.Provider value={{ showContent, setShowContent }}>{children}</Context.Provider>;
};

export default ContextProvider;
