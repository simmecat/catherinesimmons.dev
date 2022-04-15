import Image from "next/image";
import Link from "next/link";

import modelingAnimation from "../../public/images/3d-modeling-animation.png";
import bearMafia from "../../public/images/bear-mafia.png";
import brickBreaker from "../../public/images/brick-breaker.png";
import devotionQuest from "../../public/images/devotion-quest.png";
import screenplay from "../../public/images/screenplay.png";
import whc from "../../public/images/whc.png";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 justify-around">
        <div className="relative h-[175px] w-[175px] md:h-[428px] md:w-[428px]">
          <Link href="/portfolio/devotion-quest">
            <a>
              <Image
                src={devotionQuest}
                alt="Devotion Quest"
                className="rounded"
              />
            </a>
          </Link>
        </div>
        <div className="relative h-[175px] w-[175px] md:h-[428px] md:w-[428px]">
          <Link href="/portfolio/brick-breaker">
            <a>
              <Image
                src={brickBreaker}
                alt="Brick Breaker"
                className="rounded"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-around">
        <div className="relative h-[175px] w-[175px] md:h-[428px] md:w-[428px]">
          <Link href="/portfolio/bear-mafia">
            <a>
              <Image src={bearMafia} alt="Bear Mafia" className="rounded" />
            </a>
          </Link>
        </div>
        <div className="relative h-[175px] w-[175px] md:h-[428px] md:w-[428px]">
          <Link href="/portfolio/woman-hollering-creek">
            <a>
              <Image
                src={whc}
                alt="Woman Hollering Creek"
                className="rounded"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-around">
        <div className="relative h-[175px] w-[175px] md:h-[428px] md:w-[428px]">
          <Link href="../../pdfs/screenplay.pdf">
            <a target="_blank" rel="noreferrer">
              <Image src={screenplay} alt="Screenplay" className="rounded" />
            </a>
          </Link>
        </div>
        <div className="relative h-[175px] w-[175px] md:h-[428px] md:w-[428px]">
          <Link href="/portfolio/animation-3d-modeling">
            <a>
              <Image
                src={modelingAnimation}
                alt="3D Modeling & Animation"
                className="rounded"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
