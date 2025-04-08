"use client";
import { FilterDropdown } from "@/components/organisms/filter_dropdown";
import { LibraryHeroContent } from "@/components/organisms/library_hero_content";
import { HeroContainer } from "@/components/sections/hero_container";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Library = () => {
  const search_t = useTranslations("library.search");
  const [showContent, setShowContent] = useState(false);
  const content_t = useTranslations("library.content");

  return (
    <section>
      <HeroContainer h="max" overlay img_url="/library-bg.png">
        <LibraryHeroContent t={search_t} setShowContent={setShowContent} />
      </HeroContainer>
      {showContent && <FilterDropdown t={content_t} />}
    </section>
  );
};
export default Library;
