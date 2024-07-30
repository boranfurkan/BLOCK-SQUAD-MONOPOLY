import PaddingContainer from "@/components/Containers/PaddingContainer";
import SectionContainer from "@/components/Containers/SectionContainer";
import SubmissionForm from "@/components/Pages/Submission/SubmissionForm";

import HeadingWithGridBg from "@/components/Shared/HeadingWithGridBg";
import React from "react";

const Page = () => {
  return (
    <SectionContainer id="submissions">
      <HeadingWithGridBg heading="submissions" align="left" />
      <PaddingContainer className="relative z-[10]">
        <SubmissionForm />
      </PaddingContainer>
    </SectionContainer>
  );
};

export default Page;
