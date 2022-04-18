import { Layout } from "../components/Layout";

export const LandingPage = () => {
  return (
    <Layout title="Improve your climbing" buttonText="Start assessment">
      <p>
        This website will guide you through a self-assessment of your current
        climbing abilities to help identify strengths and areas for
        improvement.
      </p>

      <p>
        This assessment is based on the book&nbsp;
        <a
          href="https://trainingforclimbing.com/buy-books/training-for-climbing-3rd-edition-2016/"
          target="_blank"
          rel="noreferrer">Training for Climbing</a> by Eric Hörst.
          It's 30 questions and takes approximately 10 minutes.
      </p>
    </Layout>
  )
};
