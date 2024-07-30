import React from "react";
import FaqItem from "./FaqItem";

const FaqShow = () => {
  const dummyData = [
    {
      id: 1,
      title: "What is Block Squad Monopoly?",
      content:
        "Block Squad Monopoly is a talent finding platform built on chain, which gives the community the vote for their favorite talent. With a staking platform built in $FLOCKA Stakers will be allowed to submit their talents, and community stakers will make the final call on who makes it past the first round.",
    },
    {
      id: 2,
      title: "How many votes are required to become community approved?",
      content:
        "A community approval requires 1000 votes, each user that votes yes will count as 1 vote regardless of amount staked. Voting no will not affect a submissions progress to 1000, and will simply count towards your voting power used for future rewards. Block Squad Monopoly is about supporters, not how much money you, your supporters, or those who dont support you, This allows everybody to have a fair shot to get recognized.",
    },
    {
      id: 3,
      title: "How much $FLOCKA do I need to stake to submit talent?",
      content:
        "Submissions require an amount of $FLOCKA staked but these amounts vary depending on what kind of talent you submit, a talent that is easy to verify without user research will require a lesser stake than a talent that requires user research into your abilities. A simple example is music, if you upload music it is very easy for a user to decide whether or not to support the song. While a talent like stylist may require more research on the user end to ensure that you do have the required skills.",
    },
    {
      id: 4,
      title: "When is the full site going to be released?",
      content:
        "Currently the site you see is simply a home page to give the community an idea of what is being built, the full product release date will be set soon. The products backend is undergoing stress testing while the remainder of the ui/ux is being completed, this product has a relatively large on and offchain back end which will be thoroughly tested before release to ensure the safety of your tokens and data.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full sm:w-11/12 md:w-3/4 lg:w-2/3 mx-auto px-4 sm:px-6">
      {dummyData.map((data) => {
        return (
          <FaqItem key={data.id} title={data.title} content={data.content} />
        );
      })}
    </div>
  );
};

export default FaqShow;
