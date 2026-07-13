import AboutHero from "../../components/about/AboutHero";
import MissionVision from "../../components/about/MissionVision";
import OurStory from "../../components/about/OurStory";
import CompanyTimeline from "../../components/about/CompanyTimeline";
import QualityStandards from "../../components/about/QualityStandards";
import CoreValues from "../../components/about/CoreValues";
import AboutCTA from "../../components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <MissionVision />

      <OurStory />

      <CompanyTimeline />

      <QualityStandards />

      <CoreValues />

      <AboutCTA />
    </>
  );
}