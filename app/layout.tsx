import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";
import { Providers } from "@/providers/Provider";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Shared/Navbar";
import { fontAnton, fontArmata } from "@/config/fonts";

// Custom CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AnimatedTicker from "@/components/Shared/AnimatedTicker";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
          fontAnton.variable,
          fontArmata.variable,
          "font-akira"
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="w-full h-full min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <AnimatedTicker className={"mt-16"} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
