"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setGoal = async (goals: { [key: string]: string }) => {
  const cookieStore = await cookies();
  cookieStore.set("goals", JSON.stringify(goals));
  redirect("/my-plan/goal/summary");
};
