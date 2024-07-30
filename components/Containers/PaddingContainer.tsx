import { cn } from "@nextui-org/theme";
import React from "react";

interface PaddingContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PaddingContainer = ({ children, className }: PaddingContainerProps) => {
  return (
    <div className={cn("px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20", className)}>
      {children}
    </div>
  );
};

export default PaddingContainer;
