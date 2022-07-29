import { Button, Text } from "@nextui-org/react";

export default function GentlemenPirates() {
    return (
        <div className="flex flex-col">
            <Text className="font-bold text-3xl">Gentlemen & Pirates</Text>
            <Text>
                A one-page RPG hack of Lasers & Feelings, inspired by Our Flag Means Death and the Golden Age of Piracy. I created this game as my final project for a university course on the design and history of role-playing games.
            </Text>

            <div className="mt-4">
                <Text className="font-bold">Contribution</Text>
                <ul className="list-disc ml-6">
                    <li>Distilled the concepts and themes of Our Flag Means Death into gameplay elements.</li>
                    <li>
                        Researched pirate history for inspiration and additional story elements.
                    </li>
                    <li>Designed and implemented mechanics, adapting the Lasers & Feelings system to suit design needs.</li>
                    <li>Ran playtests for feedback, iterated gameplay and designed the page.</li>
                </ul>
            </div>

            <div className="flex flex-row flex-wrap gap-4 justify-center mt-4">
                <Button color="gradient" rounded shadow>
                    <a
                        href="https://catherinesimmons.itch.io/gentlemen-pirates"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View on Itch
                    </a>
                </Button>
            </div>
        </div>
    )
}