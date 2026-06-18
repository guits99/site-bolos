import React, { type ReactNode } from "react";

interface pageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<pageWrapperProps> = ({ children }) => {
  return <div className="min-h-screen bg-rose-200">{children}</div>;
};

export default PageWrapper;
