import { BtnField } from "@/components/atoms/btn_field";
import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_title";
import Image from "next/image";
import Link from "next/link";

const Goal = () => {
  return (
    <section className="flex justify-center items-center max-w-[1280px] w-full gap-[101px] mx-auto">
      <Image
        className="w-1/2"
        src="/goal.png"
        width={632}
        height={720}
        alt="goal"
      />
      <div className="w-1/2 pr-[140px]">
        <TitleField>How to create a goal</TitleField>
        <HeadingField mt="big">
          Brief description of the coming flow.
        </HeadingField>
        <ParagraphField>
          ed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo
          id massa pulvinar euismod cursus non justo. Sed sagittis et urna non
          efficitur.
        </ParagraphField>
        <div className="flex justify-end">
          <BtnField btn_size="medium" m_top="huge">
            <Link href={"/my-plan"}>next</Link>
          </BtnField>
        </div>
      </div>
    </section>
  );
};
export default Goal;
