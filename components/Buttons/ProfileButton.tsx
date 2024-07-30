import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import Image from "next/image";

const ProfileButton = () => {
  return (
    <Link href="/profile">
      <Image src="/icons/user-icon.svg" alt="profile" width={38} height={38} />
    </Link>
  );
};

export default ProfileButton;
