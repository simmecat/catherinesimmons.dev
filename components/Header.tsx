import Image from "next/image";

import { Text } from "@nextui-org/react";

import githubLogo from "../public/github.png";
import itchioLogo from "../public/itchio.png";
import linkedinLogo from "../public/linkedin.png";

export default function Header() {
  return (
    <div className="flex flex-col mb-4">
      <Text
        className="font-bold m-0 text-4xl md:text-7xl"
        css={{
          textGradient: "45deg, $purple500 -20%, $pink500 100%",
        }}
      >
        Catherine Simmons
      </Text>
      <div className="flex flex-row justify-between">
        <Text className="text-lg">Game Designer</Text>
        <div className="flex flex-row gap-2">
          <a
            className="my-auto h-[25px]"
            href="https://github.com/simmecat"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={githubLogo} alt="GitHub Logo" height={25} width={25} />
          </a>
          <a
            className="my-auto h-[25px]"
            href="https://www.linkedin.com/in/catherine-e-simmons/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="hover:cursor-pointer"
              src={linkedinLogo}
              alt="LinkedIn Logo"
              height={25}
              width={29}
            />
          </a>
          <a
            className="my-auto h-[25px]"
            href="https://catherinesimmons.itch.io"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="hover:cursor-pointer"
              src={itchioLogo}
              alt="itch.io Logo"
              height={25}
              width={25}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
