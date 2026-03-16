'use client';

import Images from "@/assets/images/Images";
import Image from "next/image";
import { showInfo } from "../Alert";

export default function Contact() {
  return (
    <div className="py-8 bg-white inset-shadow-sm text-gray-700 text-center flex flex-col gap-4">
      <div className="text-center">
        <span className="text-lg font-semibold mb-4 p-2 rounded-full bg-gray-200">
          Get in touch
        </span>
      </div>
      <p className="w-full md:w-1/4 mx-auto text-sm px-4">
        What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
      </p>
      <div className="flex justify-center font-bold text-2xl flex gap-2 items-center">
        <Image src={Images.mailIcon} alt="Mail Icon" className="inline-block w-6 h-6 mr-2" />
        subkikadrawi@gmail.com
        <Image src={Images.copyIcon} alt="Copy Icon" className="inline-block w-4 h-4 ml-2 cursor-pointer" onClick={() => {navigator.clipboard.writeText("subkikadrawi@gmail.com"); showInfo("Copied!", "Email address copied to clipboard");}} />
      </div>
      <div className="flex justify-center font-bold text-2xl flex gap-2 items-center">
        <Image src={Images.whatsappIcon} alt="WhatsApp Icon" className="inline-block w-6 h-6 mr-2" />
        +62 878-8866-4126
        <Image src={Images.copyIcon} alt="Copy Icon" className="inline-block w-4 h-4 ml-2 cursor-pointer" onClick={() => {navigator.clipboard.writeText("+62 878-8866-4126"); showInfo("Copied!", "Phone number copied to clipboard");}} />
      </div>
    </div>
  );
}
