import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-hd:hidden" />
        <span className="orange_gradient text_center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        SharePrompts is a platform where users can explore and share chatGPT's
        creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
