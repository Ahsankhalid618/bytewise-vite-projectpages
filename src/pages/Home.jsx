import { HeroSection } from "../components/HeroSection";
import { Clients } from "../components/Clients";
import { Community } from "../components/Community";
import { Unlock } from "../components/Unlock";
import { Marketing } from "../components/Marketing";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Clients />
      <Community />
      <Unlock />
      <Marketing />
      <Footer />
    </>
  );
};
