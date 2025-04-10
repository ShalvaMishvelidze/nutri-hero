"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setGoal = async (goals: { [key: string]: string }) => {
  const cookieStore = await cookies();
  cookieStore.set("goals", JSON.stringify(goals));
  redirect("/my-plan/goal/summary");
};

export const getGoal = async () => {
  const cookieStore = await cookies();
  return JSON.parse(cookieStore.get("goals")?.value as string);
};

export const getLocale = async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value;
  if (locale) {
    return locale;
  } else {
    return "en";
  }
};

export const setIsLoggedInCookie = async (isLoggedIn: boolean) => {
  const cookieStore = await cookies();
  cookieStore.set("isLoggedIn", String(isLoggedIn));
};

export const handleLanding = async () => {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("isLoggedIn")?.value;
  if (isLoggedIn) {
    redirect("/my-plan");
  } else {
    return;
  }
};
