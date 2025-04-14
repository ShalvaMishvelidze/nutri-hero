"use client";
import { AccountUser } from "@/components/organisms/account_user";
import { Allergens } from "@/components/sections/allergens";
import PersonalDetails from "@/components/sections/personal_details/PersonalDetails";
import { Settings } from "@/components/sections/settings";
import { useSearchParams } from "next/navigation";

const gray_container = "absolute left-0 top-0 w-[31%] h-full bg-white-6 z-10";
const content_style =
  "relative w-full max-w-[1000px] mx-auto z-20 flex gap-[101px]";
const content_right = "flex flex-col gap-[50px] my-[50px] w-full max-w-[664px]";

const Account = () => {
  const section = useSearchParams().get("section");

  return (
    <section className="relative">
      <div className={gray_container}></div>
      <div className={content_style}>
        <AccountUser />
        <div className={content_right}>
          {(() => {
            switch (section) {
              case "personal_details":
                return <PersonalDetails />;
              case "allergens":
                return <Allergens />;
              case "settings":
                return <Settings />;
              default:
                return <PersonalDetails />;
            }
          })()}
        </div>
      </div>
    </section>
  );
};
export default Account;
