import {
  registration_input,
  small_container,
  terms_checkbox,
  terms_container,
  terms_link,
  terms_text,
  terms_text_container,
} from "./RegistrationForm.style";
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
          className={registration_input}
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
      <div className={terms_container}>
        <div className={terms_text_container}>
          <p className={terms_text}>{t("i_have")}</p>
          <Link className={terms_link} href="#">
            {t("terms")}
          </Link>
        </div>
        <div
          className={`${terms_checkbox} ${checked && "border-blue"}`}
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
