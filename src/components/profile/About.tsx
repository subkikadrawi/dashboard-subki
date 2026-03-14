import Images from "@/assets/images/Images";
import Image from "next/image";

export default function About() {
  return (
    <div className="mx-auto flex w-full flex-col gap-8 px-4 py-8 sm:px-6 md:py-10 lg:flex-row lg:items-center lg:gap-12 lg:px-8">
      <div className="order-2 w-full lg:order-1 lg:w-7/12">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl">Hi, I'm Subki Kadrawi 👋🏼</h1>
        <p className="mb-4 text-justify text-sm leading-relaxed sm:text-base">
          Software Developer with 8+ years of experience building scalable web
          applications (NextJs, React) and backend systems (Node.js) across
          fintech, media, and enterprise environments. Strong background in
          RESTful API development, microservices architecture, CI/CD pipelines,
          and production deployment using Dockerized environments. Experienced
          in migrating legacy systems into modern frontend-backend architecture
          and delivering end-to-end features from requirement to production.
        </p>
        <ul className="mb-2 flex flex-col gap-2 text-sm sm:text-base">
          <li>📍 Indonesia, South Jakarta</li>
          <li>🟢 Available for new Project</li>
        </ul>
      </div>
      <div className="order-1 flex w-full justify-center lg:order-2 lg:w-5/12 lg:justify-end">
        {/* image profile */}
        <Image
          src={Images.profilePict}
          alt="Profile Picture"
          className="h-56 w-56 rounded-3xl object-cover shadow-xl/30 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
        />
      </div>
    </div>
  );
}
