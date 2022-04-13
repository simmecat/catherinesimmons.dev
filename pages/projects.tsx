import { Card, Divider, Text } from "@nextui-org/react";

export default function Projects() {
  return (
    <div className="flex flex-col">
      <Text className="font-bold mb-4 text-4xl">Projects</Text>
      <div className="flex flex-row gap-2 justify-around">
        <Card className="max-w-sm">
          <Card.Body>
            <Text>Some cool picture or icon</Text>
          </Card.Body>
          <Divider />
          <Card.Footer>
            <Text>Screenplay</Text>
          </Card.Footer>
        </Card>
        <Card className="max-w-sm">
          <Card.Body>
            <Text>Some cool picture or icon</Text>
          </Card.Body>
          <Divider />
          <Card.Footer>
            <Text>Game Design Essay</Text>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
