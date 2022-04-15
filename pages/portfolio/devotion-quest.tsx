import Link from "next/link";

import { Button, Text } from "@nextui-org/react";

export default function DevotionQuest() {
  return (
    <div className="flex flex-col">
      <Text className="font-bold text-3xl">Devotion Quest</Text>
      <div className="flex flex-col gap-4">
        <Text>
          Cast from your material realm by the Principle Gods, you may no longer
          protect or reside over your worshippers. After a war among the Lesser
          Gods, the path between the Ether and the Material opens, awakening a
          soulless source of destruction. If it ravages your realm, your
          congregation will cease. With no one to worship you, you will fade
          into nothing. You must choose a conduit to enter the material realm
          and save your people to save yourself, though limited by the material
          body you inhabit.
        </Text>
        <Text>
          A 2D action-adventure sidescroller made in Unreal Engine 4. This game
          started as a prototype for a university course dedicated to learning
          Unreal Engine and is currently a work in progress.
        </Text>
      </div>

      <div className="mt-4">
        <Text className="font-bold">Contribution</Text>
        <ul className="list-disc ml-6">
          <li>Implemented player movement and melee attack</li>
          <li>Implemented enemy behavior and damage</li>
          <li>Created and iterated level design with tilesets</li>
          <li>Created UI elements</li>
          <li>Created NPC encounter dialogue</li>
          <li>
            Utilized organization tools and source control (Figma, kanban, Git)
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <Text className="font-bold">Work in Progress</Text>
        <ul className="list-disc ml-6">
          <li>Further improvement of combat and general player experience</li>
          <li>Upgrade from Unreal Engine 4 to Unreal Engine 5</li>
        </ul>
        <div className="ml-3">
          <Text className="font-semibold">Combat</Text>
          <ul className="list-disc ml-12">
            <li>Three additional character options with different skills</li>
            <li>One additional enemy and a boss</li>
            <li>Two attacks per player character option</li>
          </ul>
        </div>
        <div className="ml-3">
          <Text className="font-semibold">Narrative</Text>
          <ul className="list-disc ml-12">
            <li>Branching dialogue for NPC conversations</li>
            <li>
              A storybook upon start of the game to provide exposition and
              worldbuilding
            </li>
          </ul>
        </div>
        <div className="ml-3">
          <Text className="font-semibold">Level</Text>
          <ul className="list-disc ml-12">
            <li>One additional level</li>
          </ul>
        </div>
        <div className="ml-3">
          <Text className="font-semibold">Effects</Text>
          <ul className="list-disc ml-12">
            <li>Sound effects and score</li>
            <li>Particle effects</li>
            <li>Lighting</li>
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <Text className="font-bold mb-2">Level Example</Text>
        <video controls className="rounded">
          <source
            src="../../videos/devotion-quest-demo.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div className="flex flex-row flex-wrap gap-4 justify-center mt-4">
        <Button color="gradient" rounded shadow>
          <Link href={"../../pdfs/devotion-quest-character-sheet.pdf"}>
            <a target="_blank" rel="noreferrer">
              View Character Sheet
            </a>
          </Link>
        </Button>
      </div>
    </div>
  );
}
