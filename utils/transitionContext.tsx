"use client";
import { createContext, useState, useMemo, useContext } from "react";

export const TransitionContext = createContext<TransitionContextType>({
  dir: null,
  setDir: () => {},
});

export const useTransitionContext = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "useTransitionContext must be used within a TransitionProvider"
    );
  }
  return context;
};

export const TransitionProvider = ({ children }: { children: child }) => {
  const [dir, setDir] = useState<boolean | null>(null); // * Transition direction
  const value = useMemo(
    () => ({
      dir,
      setDir,
    }),
    [dir]
  );
  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
};
