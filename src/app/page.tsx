import Hero from "@/components/Header/Hero";
import HarshReality from "@/components/Home/HarshReality";
import HowWeHelp from "@/components/Home/HowWeHelp";
import OurApproach from "@/components/Home/OurApproach";
import OurStory from "@/components/Home/OurStory";
import ServicesSection from "@/components/Home/ServicesSection";
import StatsSection from "@/components/Home/StatsSection";
import WhyChooseUs from "@/components/Home/WhyChooseUs";


export default function Home() {
  return (
    <>
      <div>
        <Hero/>
         <StatsSection/>
        <OurStory />
        <WhyChooseUs />
        <ServicesSection />
        <OurApproach />
        <HarshReality/>
        <HowWeHelp />
       </div>
    </>
  );
}
