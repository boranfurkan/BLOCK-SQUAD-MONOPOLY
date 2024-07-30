import AnimatedTicker from "@/components/Shared/AnimatedTicker";
import HeadingWithGridBg from "@/components/Shared/HeadingWithGridBg";
import PaddingContainer from "@/components/Containers/PaddingContainer";
import HeroCarousel from "@/components/Pages/Home/HeroCarousel/HeroCarousel";
import FeaturedSubmissionShow from "@/components/Pages/Home/FeaturedSubmissions/FeaturedSubmissionShow";
import SectionContainer from "@/components/Containers/SectionContainer";
import FeatureArtistdShow from "@/components/Pages/Home/FeaturedArtists/FeaturedArtistShow";
import FeaturedHitsCarousel from "@/components/Pages/Home/FeaturedHits/FeaturedHitsCarousel";
import FaqShow from "@/components/Pages/Home/FAQ/FaqShow";

export default function Home() {
  return (
    <SectionContainer className="gap-16">
      <section className="" id="hero">
        <HeroCarousel />
        <AnimatedTicker />
      </section>
      <SectionContainer id="featured-submissions">
        <HeadingWithGridBg heading="featured submissions" align="left" />
        <PaddingContainer className="relative z-[10]">
          <FeaturedSubmissionShow />
        </PaddingContainer>
      </SectionContainer>
      <SectionContainer id="featured-artists">
        <HeadingWithGridBg heading="featured artists" align="right" />
        <PaddingContainer className="relative z-[10]">
          <FeatureArtistdShow />
        </PaddingContainer>
      </SectionContainer>
      <SectionContainer id="featured-hits">
        <HeadingWithGridBg heading="featured hits" align="left" />
        <FeaturedHitsCarousel />
      </SectionContainer>
      <SectionContainer id="faq">
        <HeadingWithGridBg heading="frequently asked questions" align="right" />
        <PaddingContainer className="relative z-[10] px-0">
          <FaqShow />
        </PaddingContainer>
      </SectionContainer>
    </SectionContainer>
  );
}
