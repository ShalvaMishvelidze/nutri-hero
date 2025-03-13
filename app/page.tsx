"use client";
import { HeroContainer } from "@/components/sections/hero_container";
import { HeroImage } from "@/components/atoms/hero_image";
import { LandingHero } from "@/components/organisms/landing_hero";
import { LandingExercise } from "@/components/sections/landing_exercise";

export default function Home() {
  return (
    <>
      <HeroContainer>
        <HeroImage />
        <LandingHero />
      </HeroContainer>
      <LandingExercise />
    </>
  );
}
