const SingleWorkout = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  console.log("slug", slug);

  return <div>SingleWorkout</div>;
};
export default SingleWorkout;
