import { HeadingField } from "@/components/atoms/heading_field";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { NumberCards } from "./number_cards";
import { Navigation } from "./navigation";

const container =
  "w-[210px] flex flex-col mr-[30px] mt-[34px] sticky top-[100px]";

const AccountUser = () => {
  const t = useTranslations("account.user");

  return (
    <div className={container}>
      <Image
        src={"/avatar.svg"}
        width={151}
        height={151}
        alt="avatar"
        className="size-[151px]"
      />
      <HeadingField mt="medium" heading_size="big" weight="bold">
        {t("user_name")}
      </HeadingField>
      <NumberCards t={t} />
      <Navigation t={t} />
    </div>
  );
};
export default AccountUser;
