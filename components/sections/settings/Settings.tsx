import { BtnField } from "@/components/atoms/btn_field";
import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_field";
import { useTranslations } from "next-intl";
import Image from "next/image";

const method_container =
  "w-full h-[50px] rounded-[5px] border border-blue-5 flex justify-between items-center px-[20px] mt-[30px] max-xxs:h-auto max-xxs:py-[5px] max-xxs:flex-wrap";
const method_left = "flex justify-start items-center gap-[6px] ";

const Settings = () => {
  const t = useTranslations("account.settings");
  return (
    <div>
      <TitleField title_size="_22" mb="_20" weight="bold">
        {t("payment_method")}
      </TitleField>
      <div className={method_container}>
        <div className={method_left}>
          <Image
            src={"/stripe.svg"}
            alt="stripe"
            width={70}
            height={30}
            className="w-[70px] h-[30px] object-contain"
          />
          <ParagraphField heading_size="small" mt="none" weight="normal">
            **** **** **** 6859
          </ParagraphField>
        </div>
        <Image
          src={"/edit-blue.svg"}
          alt="edit"
          width={22}
          height={22}
          className="size-[22px] cursor-pointer"
        />
      </div>
      <div className={method_container}>
        <div className={method_left}>
          <Image
            src={"/paypal.svg"}
            alt="paypal"
            width={70}
            height={30}
            className="w-[70px] h-[30px] object-contain"
          />
          <ParagraphField heading_size="small" mt="none" weight="normal">
            om@r.ge
          </ParagraphField>
        </div>
        <Image
          src={"/edit-blue.svg"}
          alt="edit"
          width={22}
          height={22}
          className="size-[22px] cursor-pointer"
        />
      </div>
      <TitleField
        styleClassName="mt-[30px]"
        title_size="_22"
        mb="_10"
        weight="bold"
      >
        {t("subscription")}
      </TitleField>
      <ParagraphField
        heading_size="small"
        mt="none"
        weight="normal"
        color="dark_gray"
      >
        {t("paragraph")}
      </ParagraphField>
      <HeadingField color="purple" heading_size="_13" weight="normal" mt="_40">
        {t("customer_id")}
      </HeadingField>
      <div className="flex justify-end mt-[107px] max-sm:mt-[50px]">
        <BtnField styleClassName="!bg-red max-xxs:!w-full" btn_size="medium">
          {t("btn")}
        </BtnField>
      </div>
    </div>
  );
};
export default Settings;
