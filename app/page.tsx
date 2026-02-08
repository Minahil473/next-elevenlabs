import Models from "../components/sections/HomeSections/models";
import HeroSection from "../components/sections/HomeSections/HeroSection";
import TrusterSection from "../components/sections/HomeSections/trusters";
import CreaterSection from "../components/sections/HomeSections/creaters";
import EnterpriSection from "../components/sections/HomeSections/enterprise";
import InvesterSection from "../components/sections/HomeSections/investers";
import PageWrapper from "../components/layout/PageWrapper";
export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <TrusterSection />
      <CreaterSection />
      <Models />
      <EnterpriSection />
      <InvesterSection />
    </PageWrapper>
  );
}
