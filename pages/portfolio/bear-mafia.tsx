import Link from "next/link";

import { Button, Text } from "@nextui-org/react";

export default function BearMafia() {
  return (
    <div className="flex flex-col">
      <Text className="font-bold text-3xl">Bear Mafia- Territory Showdown</Text>
      <Text>
        A print-and-play strategy-matching game designed for a DePaul University
        course. In our group of four, we collaborated over nine weeks to plan,
        design, iterate, playtest, and present.
      </Text>

      <div className="mt-4">
        <Text className="font-bold">Contribution</Text>
        <ul className="list-disc ml-6">
          <li>Led the team in charge of art, concept, and narrative design.</li>
          <li>Wrote and maintained game design document.</li>
          <li>
            Refined player experience by creating a strong concept, specific
            worldbuilding elements, and a relevant aesthetic.
          </li>
          <li>
            Strengthened worldbuilding through the game&apos;s cards by creating
            actions/events relevant to the game world and theme.
          </li>
          <li>
            Created concept art/artboards to narrow down game aesthetic with
            team.
          </li>
          <li>Designed game pieces and cards in Adobe Illustrator.</li>
          <li>Conducted playtesting with university students.</li>
          <li>
            Made adjustments to game elements based on student and professor
            critique.
          </li>
        </ul>
      </div>

      <div className="flex flex-row flex-wrap gap-4 justify-center mt-4">
        <Button color="gradient" rounded shadow>
          <Link href={"../../pdfs/bear-mafia-gdd.pdf"}>
            <a target="_blank" rel="noreferrer">
              View Game Design Doc
            </a>
          </Link>
        </Button>
        <Button color="gradient" rounded shadow>
          <a
            href="https://catherinesimmons.itch.io/bear-mafia-territory-sdh"
            target="_blank"
            rel="noreferrer"
          >
            View on Itch
          </a>
        </Button>
      </div>
    </div>
  );
}
