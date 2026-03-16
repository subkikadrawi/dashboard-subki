'use client';

import Images from "@/assets/images/Images";
import Image from "next/image";

export default function Skill() {
  return (
    <div className="py-8 bg-white shadow-sm inset-shadow-sm text-gray-700 text-center flex flex-col gap-4">
      <div className="text-center">
        <span className="text-lg font-semibold mb-4 p-2 rounded-full bg-gray-200">
          Skills
        </span>
      </div>
      <p className="w-full md:w-1/4 mx-auto text-sm">
        The skills, tools and technologies I am really good at:
      </p>
      <div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Image src={Images.skillReactLogo} alt="React" width={60} height={60} title="ReactJS" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={Images.skillNextjsLogo} alt="Next.js" width={60} height={60} title="Next.js" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={Images.skillNodejsLogo} alt="Node.js" width={60} height={60} title="Node.js" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={Images.skillPhpLogo} alt="PHP" width={60} height={60} title="PHP" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={Images.skillLaravelLogo} alt="Laravel" width={60} height={60} title="Laravel" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={Images.skillYii2Logo} alt="Yii2" width={60} height={60} title="Yii2" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={Images.skillTailwindLogo} alt="Tailwind CSS" width={60} height={60} title="Tailwind CSS" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={Images.skillTypescriptLogo} alt="TypeScript" width={60} height={60} title="TypeScript" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={Images.skillFlutterLogo} alt="Flutter" width={60} height={60} title="Flutter" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={Images.skillDockerLogo} alt="Docker" width={60} height={60} title="Docker" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={Images.skillJenkinsLogo} alt="Jenkins" width={60} height={60} title="Jenkins" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={Images.skillMysqlLogo} alt="MySQL" width={60} height={60} title="MySQL" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={Images.skillLinuxLogo} alt="Linux" width={60} height={60} title="Linux" />
          </div>
        </div>
      </div>
    </div>
  );
}
