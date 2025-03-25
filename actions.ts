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
