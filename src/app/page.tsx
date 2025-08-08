import MochitosHero from "@/components/Hero";
import CarrouselArch from "@/components/CarroucelArch";
import FadeInOnLoad from "@/components/complex/FadeInOnLoad";
import { PROJECT_URL } from "@/config/app.config";

export default function Home() {
  return (
    <div className="">
      <MochitosHero />
      <div className="bg-moch-100 mt-15">
        <FadeInOnLoad delay={500}>
          <CarrouselArch />
        </FadeInOnLoad>
      </div>
    </div>
  );
}
