import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

// Hero is above the fold — eager. Everything below is code-split (still SSR'd).
const Manifesto = dynamic(() =>
  import("@/components/sections/Manifesto").then((m) => m.Manifesto)
);
const Capabilities = dynamic(() =>
  import("@/components/sections/Capabilities").then((m) => m.Capabilities)
);
const Services = dynamic(() =>
  import("@/components/sections/Services").then((m) => m.Services)
);
const Process = dynamic(() =>
  import("@/components/sections/Process").then((m) => m.Process)
);
const About = dynamic(() =>
  import("@/components/sections/About").then((m) => m.About)
);
const NicheTargets = dynamic(() =>
  import("@/components/sections/NicheTargets").then((m) => m.NicheTargets)
);
const PlatformTicker = dynamic(() =>
  import("@/components/ui/PlatformTicker").then((m) => m.PlatformTicker)
);
const CTA = dynamic(() =>
  import("@/components/sections/CTA").then((m) => m.CTA)
);
const Footer = dynamic(() =>
  import("@/components/sections/Footer").then((m) => m.Footer)
);

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Capabilities />
      <Services />
      <Process />
      <About />
      <NicheTargets />
      <PlatformTicker />
      <CTA />
      <Footer />
    </>
  );
}
