import { cn } from "@nextui-org/theme";
import React from "react";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = ({
  id,
  children,
  className,
}: SectionContainerProps) => {
  return (
    <section className={cn("flex flex-col gap-24", className)} id={id}>
      {children}
    </section>
  );
};

export default SectionContainer;
