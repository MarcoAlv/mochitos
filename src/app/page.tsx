import MochitosHero from "@/components/Hero";
import FadeInOnLoad from "@/components/complex/FadeInOnLoad";
import { PROJECT_URL } from "@/config/app.config";
import CarrouselWrapper from "@/components/ServerCarroucel"

export default function Home() {
  return (
    <div className="">
      <MochitosHero />
      <div className="bg-moch-100 mt-15">
        <FadeInOnLoad delay={500}>
          <CarrouselWrapper />
        </FadeInOnLoad>
      </div>
    </div>
  );
}
