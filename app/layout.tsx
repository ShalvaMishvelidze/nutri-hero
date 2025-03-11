import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

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
      <body className={`${lato.variable} font-lato bg-white`}>
        <AntdRegistry>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="relative z-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
