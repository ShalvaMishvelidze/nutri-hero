import { TitleField } from "@/components/atoms/registration_field";
import { MasonryCard } from "@/components/organisms/masonry_card";
import { HeroContainer } from "@/components/sections/hero_container";
import { useTranslations } from "next-intl";

const masonry_container =
  "columns-1 sm:columns-2 lg:columns-3 gap-[16px] max-w-[1000px] w-full mx-auto mt-[40px]";

const Blog = () => {
  const t = useTranslations("blog");
  return (
    <section>
      <HeroContainer overlay h="small" img_url="/blog-bcg.png">
        <TitleField color="white" styleClassName="text-center">
          {t("title")}
        </TitleField>
      </HeroContainer>
      <div className={masonry_container}>
        <MasonryCard key={"mason_container_1"} index={1} />
        <MasonryCard key={"mason_container_2"} index={2} />
        <MasonryCard
          key={"mason_container_3"}
          index={3}
          lineLimit="_6"
          imgH="big"
        />
        <MasonryCard key={"mason_container_4"} index={4} lineLimit="_3" />
        <MasonryCard key={"mason_container_5"} index={5} lineLimit="_3" />
        <MasonryCard
          key={"mason_container_6"}
          index={6}
          lineLimit="_6"
          imgH="big"
        />
      </div>
    </section>
  );
};
export default Blog;
