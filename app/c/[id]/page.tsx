"use client";
import PaddingContainer from "@/components/Containers/PaddingContainer";
import SectionContainer from "@/components/Containers/SectionContainer";
import ContentPage from "@/components/Pages/Content/ContentPage";
import CommentsShow from "@/components/Shared/CommentsShow";
import HeadingWithGridBg from "@/components/Shared/HeadingWithGridBg";
import React from "react";

const commentsData = [
  {
    author: "MADEBYISAACB",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
  },
  {
    author: "MADEBYISAACB",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
  },
  {
    author: "MADEBYISAACB",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
  },
];

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <SectionContainer className="gap-16">
      <SectionContainer id="content" className="gap-4">
        <PaddingContainer className="relative z-[10] mt-10">
          <ContentPage />
        </PaddingContainer>
      </SectionContainer>
      <SectionContainer id="content" className="gap-4">
        <HeadingWithGridBg heading="Comments" align="left" />
        <PaddingContainer className="relative z-[10] mt-10">
          <CommentsShow
            id={params.id}
            comments={commentsData}
            version="limited"
          />
        </PaddingContainer>
      </SectionContainer>
    </SectionContainer>
  );
};

export default Page;
