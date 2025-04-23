import { HeadingField } from "@/components/atoms/heading_field";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { NumberCards } from "./number_cards";
import { Navigation } from "./navigation";

const container =
  "w-[210px] flex flex-col mr-[30px] mt-[34px] sticky top-[100px] max-sm:w-full max-sm:static max-sm:flex-row max-sm:justify-between max-sm:bg-white-6 max-sm:p-[30px] max-sm:mr-0 max-sm:mt-0 max-xs:flex-col max-xs:items-center";

const AccountUser = () => {
  const t = useTranslations("account.user");

  return (
    <div className={container}>
      <div className="flex-col">
        <Image
          src={"/avatar.svg"}
          width={151}
          height={151}
          alt="avatar"
          className="size-[151px] max-xs:mx-auto"
        />
        <div className="flex-col">
          <HeadingField
            styleClassName="max-xs:text-center"
            mt="medium"
            heading_size="big"
            weight="bold"
          >
            {t("user_name")}
          </HeadingField>
          <div className="w-full max-sm:w-[200px] max-xs:w-[160px]">
            <NumberCards t={t} />
          </div>
        </div>
      </div>
      <Navigation t={t} />
    </div>
  );
};
export default AccountUser;
