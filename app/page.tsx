import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionSection from "@/components/CollectionSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <div className="relative bg-[#010828]">
      {/* Texture Overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          backgroundImage: "url(/texture.png)",
          backgroundSize: "cover",
          mixBlendMode: "lighten",
          opacity: 0.6,
        }}
      />
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <CtaSection />
    </div>
  );
}
