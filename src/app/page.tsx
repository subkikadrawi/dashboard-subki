import About from "@/components/profile/About";
import Contact from "@/components/profile/Contact";
import Skill from "@/components/profile/Skill";
import Work from "@/components/profile/Work";

export default function Home() {
  return (
    <>
      <div id="about" className="w-full lg:w-5/6 mx-auto p-4">
        <About />
      </div>
      <Skill />
      <div id="work" className="w-full lg:w-5/6 mx-auto p-4">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
