"use client";
import { HeroContainer } from "@/components/sections/hero_container";
import { HeroImage } from "@/components/atoms/hero_image";
import { LandingHero } from "@/components/organisms/landing_hero";

export default function Home() {
  return (
    <HeroContainer>
      <HeroImage />
      <LandingHero />
    </HeroContainer>
  );
}
