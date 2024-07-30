import React from "react";
import Link from "next/link";
import { cn } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

const PrimaryLink = ({
  href,
  children,
  className,
  buttonContent,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  buttonContent?: string;
}) => {
  return (
    <Link href={href} target="blank">
      <Button
        className={cn(
          "bg-primary rounded-[57px] font-content-md-2 p-3 text-white",
          className
        )}
      >
        {children}
      </Button>
    </Link>
  );
};

export default PrimaryLink;
