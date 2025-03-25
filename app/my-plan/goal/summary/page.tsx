import { cookies } from "next/headers";

const Summary = async () => {
  const cookeStore = await cookies();
  const goals = cookeStore.get("goals")?.value;
  console.log(Object.keys(JSON.parse(goals as string)));

  return <div>Summary</div>;
};
export default Summary;
