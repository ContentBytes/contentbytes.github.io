import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import AboutCake from "../components/CAKE/CakeAbout";
import CakeSpeakers from "../components/CAKE/CakeSpeakers";
import CakeCompanies from "../components/CAKE/CakeCompanies";
import CakePartners from "../components/CAKE/CakeSponsors";
import CakeTopics from "../components/CAKE/CakeTopics";
import CakeNetworking from "../components/CAKE/CakeNetworking";

export default function CakeConf(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <AboutCake />
      <CakeSpeakers />
      <CakeTopics />
      <CakeCompanies />
      <CakeNetworking />
      <CakePartners />
    </Layout>
  );
}
