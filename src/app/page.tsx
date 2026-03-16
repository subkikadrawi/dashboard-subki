import About from "@/components/profile/About";
import Contact from "@/components/profile/Contact";
import Work from "@/components/profile/Work";

export default function Home() {
  return (
    <div className="w-full lg:w-5/6 mx-auto p-4">
      <About />
      <Work />
      <Contact />
    </div>
  )
}
