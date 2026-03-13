import About from "@/components/profile/About";
import Contact from "@/components/profile/Contact";
import Work from "@/components/profile/Work";

export default function Home() {
  return (
    <div className="w-5/6 mx-auto p-4">
      <h1 className="text-3xl font-bold">Template Next.js Starter</h1>
      <About />
      <Work />
      <Contact />
    </div>
  )
}
