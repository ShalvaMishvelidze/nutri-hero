import { small_container } from "./RegistrationForm.style";
import { FormEvent, useState } from "react";
import { ModalLink } from "@/components/atoms/modal_link";
import { AuthLink } from "@/components/atoms/auth_link";
import { useTranslations } from "next-intl";
import { ModalBtn } from "@/components/atoms/modal_btn";
import Link from "next/link";
import Image from "next/image";
import { Input } from "antd";

const RegistrationForm = () => {
  const t = useTranslations("registration");
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-[324px]">
      <div className={small_container}>
        <Input
          placeholder={t("email")}
          rootClassName="custom-input"
          prefix={
            <Image src={"/email.svg"} alt="email" width={22} height={22} />
          }
          className="!h-[60px] hover:!border-purple !pl-[12px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ModalLink href="#" img_url="/google.svg">
          {t("google")}
        </ModalLink>
        <ModalLink href="#" img_url="/facebook.svg">
          {t("facebook")}
        </ModalLink>
      </div>
      <div className="flex justify-between items-center mt-[40px] mb-[15px]">
        <div className="flex items-center gap-[3px]">
          <p className="text-[12px] leading-[22px] text-gray-60">
            {t("i_have")}
          </p>
          <Link
            className="text-[12px] leading-[22px] text-purple hover:underline"
            href="#"
          >
            {t("terms")}
          </Link>
        </div>
        <div
          className={`size-[15px] rounded-[50%] border cursor-pointer ${
            checked && "border-blue"
          }`}
          onClick={() => setChecked(!checked)}
        >
          {checked && (
            <Image src={"checked.svg"} alt="checked" width={15} height={15} />
          )}
        </div>
      </div>
      <ModalBtn disabled={(!email || !checked) && true}>
        <Link href={"/registration/password"}>{t("button")}</Link>
      </ModalBtn>
      <AuthLink
        text={t("login_text")}
        link="login"
        link_text={t("login_link")}
      />
    </form>
  );
};
export default RegistrationForm;
