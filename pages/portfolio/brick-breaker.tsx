import { Button, Text } from "@nextui-org/react";

export default function BrickBreaker() {
  return (
    <div className="flex flex-col">
      <Text className="font-bold text-3xl">Brick Breaker</Text>
      <Text>
        Quite simply, a brick breaker demo. The professor designed this project
        to showcase our knowledge of Unity and C# scripting, built over a
        semester for a course dedicated to learning Unity and scripting.
      </Text>

      <div className="mt-4">
        <Text className="font-bold">Contribution</Text>
        <ul className="list-disc ml-6">
          <li>Implemented gameplay using C#</li>
          <li>
            Created a level controller to manage score and level progression
          </li>
          <li>Designed five levels and three power-ups</li>
          <li>Created pixel assets using Asperite</li>
          <li>Sourced and implemented sound effects</li>
          <li>Utilized Figma to prototype UI and game layout</li>
          <li>Created a kanban board to set deadlines and meet requirements</li>
          <li>Utilized source control</li>
          <li>
            Utilized organization tools and source control (Figma, kanban, Git)
          </li>
        </ul>
      </div>

      <div className="flex flex-row flex-wrap gap-4 justify-center mt-4">
        <Button color="gradient" rounded shadow>
          <a
            href="https://catherinesimmons.itch.io/brick-breaker"
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
