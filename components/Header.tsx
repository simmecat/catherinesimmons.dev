import Image from "next/image";

import { Text } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import githubLightLogo from "../public/images/github-light.png";
import githubLogo from "../public/images/github.png";
import itchioLogo from "../public/images/itchio.png";
import linkedinLogo from "../public/images/linkedin.png";
import twitterLogo from "../public/images/twitter.png";

export default function Header() {
  const { resolvedTheme } = useTheme();
  const [githubImage, setGithubImage] = useState(githubLogo);

  useEffect(() => {
    setGithubImage(resolvedTheme === "light" ? githubLogo : githubLightLogo);
  }, [resolvedTheme]);

  return (
    <div className="flex flex-col mb-4">
      <Text className="font-bold m-0 text-4xl md:text-7xl">
        Catherine Simmons
      </Text>
      <div className="flex flex-row justify-between">
        <Text className="text-lg">Game Designer</Text>
        <div className="flex flex-row gap-2">
          <a
            className="my-auto h-[25px]"
            href="https://twitter.com/simmecat"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={twitterLogo} alt="Twitter Logo" height={25} width={25} />
          </a>
          <a
            className="my-auto h-[25px] w-[25px]"
            href="https://github.com/simmecat"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={githubImage} alt="GitHub Logo" height={25} width={25} />
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
