import Link from "next/link";

import { Button, Text } from "@nextui-org/react";

export default function WomanHolleringCreek() {
  return (
    <div className="flex flex-col">
      <Text className="font-bold text-3xl">Woman Hollering Creek</Text>
      <Text>
        A narrative-focused point-and-click prototype, adapting the short story{" "}
        <span>
          <i>Woman Hollering Creek</i>
        </span>{" "}
        by Sandra Cisneros. In this University course, I practiced establishing
        design goals for game projects based on existing IP. These design goals
        were informed by the core concepts of Cisneros&apos; story. Finding
        these concepts was integral to creating a player experience that
        reflected{" "}
        <span>
          <i>Woman Hollering Creek</i>
        </span>
        &apos;s central themes and commentary on cultural and sociopolitical
        issues.
      </Text>

      <div className="mt-4">
        <Text className="font-bold">Contribution</Text>
        <ul className="list-disc ml-6">
          <li>Analyzed how concepts could be translated to design goals.</li>
          <li>
            Created paper prototype with dynamic elements to simulate gameplay.
          </li>
          <li>Edited final product in Adobe Premiere Pro.</li>
        </ul>
      </div>

      <div className="mt-4">
        <Text className="font-bold mb-2">Prototype</Text>
        <video controls className="rounded">
          <source src="../../videos/whc-demo.mp4" type="video/mp4"></source>
        </video>
      </div>

      <div className="flex flex-row flex-wrap gap-4 justify-center mt-4">
        <Button color="gradient" rounded shadow>
          <Link href={"../../pdfs/whc-reflection.pdf"}>
            <a target="_blank" rel="noreferrer">
              View Game Feel Reflection
            </a>
          </Link>
        </Button>
      </div>
    </div>
  );
}
