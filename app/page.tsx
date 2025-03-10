"use client";
import Image from "next/image";
import { Button } from "antd";
import { useLocale, useTranslations } from "next-intl";
import { setUserLocale } from "@/services/locale";

export default function Home() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <div className="flex justify-center items-center mt-[100px] ">
      <h1 className="text-red">{t("hello")}</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Button
        type="primary"
        className="!text-blue"
        onClick={() => {
          setUserLocale(locale === "en" ? "ka" : "en");
        }}
      >
        {t("button")}
      </Button>
    </div>
  );
}
