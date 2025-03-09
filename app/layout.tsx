import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "NutriHero",
  description: "Healthy food recipes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${lato.variable} font-lato`}>
        <NextIntlClientProvider messages={messages}>
          <AntdRegistry>{children}</AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
