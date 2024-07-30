import React from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { useToast } from "@/providers/ToastProvider";
import clsx from "clsx";

const WalletConnect = ({ className }: { className?: string }) => {
  const { promiseToast } = useToast();

  const handleConnectWallet = async () => {
    await promiseToast(new Promise((resolve) => setTimeout(resolve, 1000)), {
      loading: "Connecting Wallet...",
      success: "Wallet Connected",
      error: "Failed to connect wallet",
      description: "Connecting wallet to the blockchain network...",
    });
  };

  return (
    <Button
      className={clsx(
        "primary-box-shadow-lg bg-primary font-content-md rounded-[50px]",
        className
      )}
      onClick={handleConnectWallet}
    >
      Connect Wallet
    </Button>
  );
};

export default WalletConnect;
