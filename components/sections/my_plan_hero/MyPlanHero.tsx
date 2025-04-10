import NumberCardContainer from "@/components/organisms/number_card_container/NumberCardContainer";
import { HeroContainer } from "../hero_container";
import {
  hero_btn_container,
  hero_content_container,
  hero_left_container,
  hero_right_container,
} from "./MyPlanHero.style";
import { BtnField } from "@/components/atoms/btn_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_title";
import { useTranslations } from "next-intl";
import Link from "next/link";

const MyPlanHero = () => {
  const t = useTranslations("my_plan.hero");
  return (
    <HeroContainer items="end" pb="medium" img_url="/my-plan-hero.png">
      <div className={hero_content_container}>
        <div className={hero_left_container}>
          <NumberCardContainer />
          <div className={hero_btn_container}>
            <BtnField text="small" m_top="none" bg="gray">
              {t("past_btn")}
            </BtnField>
            <BtnField text="small" m_top="none">
              <Link href={"/my-plan/goal"}>{t("new_btn")}</Link>
            </BtnField>
          </div>
        </div>
        <div className={hero_right_container}>
          <ParagraphField heading_size="tiny" color="gray" mt="none">
            {t("paragraph_1")}
          </ParagraphField>
          <TitleField color="white" title_size="medium" mb="none">
            {t("title")}
          </TitleField>
          <ParagraphField heading_size="small" color="light_blue" mt="small">
            {t("paragraph_2")}
          </ParagraphField>
        </div>
      </div>
    </HeroContainer>
  );
};
export default MyPlanHero;
