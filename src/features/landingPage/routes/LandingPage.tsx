import { Layout } from "../components/Layout";

export const LandingPage = () => {
  return (
    <Layout title="Improve your climbing" buttonText="Take assessment">
      <p>
        This website will guide you through a self-assessment of your current
        climbing skillset to help identify strengths, and areas for
        improvement.
      </p>

      <p>
        The assessment is 30 questions and takes approximately 10 minutes.
      </p>
    </Layout>
  )
};
