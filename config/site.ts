export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Block Squad Monopoly",
  description: "Revolutionizing the music industry, powered by $FLOCKA.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Voting",
      href: "/voting",
    },
    {
      label: "Content",
      href: "/content",
    },
    {
      label: "Submissions",
      href: "/submissions",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
};
