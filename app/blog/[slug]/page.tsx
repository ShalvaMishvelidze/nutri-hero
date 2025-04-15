import { SingleBlogOrganism } from "@/components/organisms/single_blog";

const container = "w-full max-w-[580px] mx-auto mb-[116px]";

const SingleBlog = () => {
  return (
    <section className={container}>
      <SingleBlogOrganism key={"single_blog_1"} index={1} />
      <SingleBlogOrganism
        key={"single_blog_2"}
        index={2}
        splitParagraphIntoBlocksNumber={2}
      />
    </section>
  );
};
export default SingleBlog;
