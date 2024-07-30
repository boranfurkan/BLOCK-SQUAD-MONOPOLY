import PaddingContainer from "@/components/Containers/PaddingContainer";
import SectionContainer from "@/components/Containers/SectionContainer";
import HeadingWithGridBg from "@/components/Shared/HeadingWithGridBg";
import React from "react";
import EditProfile from "@/components/Pages/Profile/EditProfile";
import WalletInfo from "@/components/Pages/Profile/WalletInfo";
import TokenInfo from "@/components/Pages/Profile/TokenInfo";
import ProfileSubmissions from "@/components/Pages/Profile/ProfileSubmissions";
import BadgeShow from "@/components/Pages/Profile/BadgeShow";

const Page = () => {
  return (
    <SectionContainer className="gap-16">
      <SectionContainer id="edit-profile">
        <HeadingWithGridBg heading="edit profile" align="left" />
        <PaddingContainer className="relative z-[10] space-y-20">
          <EditProfile />
          <WalletInfo />
          <TokenInfo />
        </PaddingContainer>
      </SectionContainer>
      <SectionContainer id="profile-submissions">
        <HeadingWithGridBg heading="submissions" align="left" />
        <PaddingContainer className="relative z-[10] space-y-20">
          <ProfileSubmissions />
        </PaddingContainer>
      </SectionContainer>
      <SectionContainer id="badge-list">
        <HeadingWithGridBg heading="badge list" align="left" />
        <PaddingContainer className="relative z-[10] space-y-20">
          <BadgeShow />
        </PaddingContainer>
      </SectionContainer>
    </SectionContainer>
  );
};

export default Page;
