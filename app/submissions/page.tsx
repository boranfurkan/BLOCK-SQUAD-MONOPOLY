import PaddingContainer from "@/components/Containers/PaddingContainer";
import SectionContainer from "@/components/Containers/SectionContainer";
import SubmissionsShow from "@/components/Pages/Submission/SubmissionsShow";
import HeadingWithGridBg from "@/components/Shared/HeadingWithGridBg";
import React from "react";

const page = () => {
  return (
    <SectionContainer id="submissions">
      <HeadingWithGridBg heading="submissions" align="left" />
      <PaddingContainer className="relative z-[10]">
        <SubmissionsShow />
      </PaddingContainer>
    </SectionContainer>
  );
};

export default page;
